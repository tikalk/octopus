const _ = require('lodash');

const { getSheetData } = require('./../../utils/spreadshit-data-fetcher');
const { authorization } = require('./../../utils/google-authorization');
const { ALL } = require('../../constants');
const config = require('../../dataConfig');

const getEmployees = async (req, res) => {
  const { group = '', email: userEmail, role = EMPLOYEE } = req.auth;
  const topic = config.employees;
  try {
    const auth = await authorization();
    const [employeesData, originalTitles] = await getSheetData({ auth, topic });
    const { groupIndex, displayNameIndex, identifiersIndex, leaderIndex } = topic;
    const data = employeesData.reduce(
      (acc, employeeArr) => {
        const obj = {
          group: employeeArr[groupIndex] || '',
          name: employeeArr[displayNameIndex] || '',
          leader: employeeArr[leaderIndex],
          identifiers: identifiersIndex.map((index) => employeeArr[index]),
        };
        const isMe = obj.identifiers.find((identifier) => identifier === userEmail);
        const isMyGroup = obj.group.toLowerCase() === group.toLowerCase() || group === ALL;

        if (isMe || isMyGroup) {
          if (isMe) {
            acc.me = { ...obj, role };
          }
          acc.employees.push(obj);
        }
        return acc;
      },
      { me: {}, employees: [] }
    );

    data.me.name = data.me.name || userEmail.split('@')[0];

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getEmployees,
};
