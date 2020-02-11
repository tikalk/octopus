const { getEmployeesList } = require('./../../utils/employees.util')

const getEmployees = async (req, res) => {
  try {
    const data = await getEmployeesList(req.auth);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getEmployees
};
