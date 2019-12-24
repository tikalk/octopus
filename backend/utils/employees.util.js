const _ = require('lodash');

const { getSheetData } = require('./spreadshit-data-fetcher');
const { authorization } = require('./google-authorization');
const { ALL } = require('../constants');
const config = require('../dataConfig');

const getEmployeesList = async (req) => {
  const { group = '', email: userEmail, role = EMPLOYEE } = req.auth;
  const topic = config.employees;
  const auth = await authorization();
  const employeesData = await getSheetData({ auth, topic });
  const { groupIndex, displayNameIndex, identifiersIndex, leaderIndex } = topic;
  const data = employeesData.reduce(
    (acc, employeeArr) => {
      const obj = {
        group: employeeArr[groupIndex] || '',
        name: employeeArr[displayNameIndex] || '',
        leader: employeeArr[leaderIndex],
        identifiers: identifiersIndex.map(index => employeeArr[index])
      };
      const isMe = obj.identifiers.find(identifier => identifier === userEmail);
      const isMyGroup = obj.group.toLowerCase() === group.toLowerCase() || group === ALL;

      if (isMe || isMyGroup) {
        if (isMe) {
          acc.me = { ...obj };
        }
        acc.employees.push(obj);
      }
      return acc;
    },
    { me: {}, employees: [] }
  );

  data.me.name = data.me.name || userEmail.split('@')[0];
  return data;
};

module.exports = {
  getEmployeesList
};
