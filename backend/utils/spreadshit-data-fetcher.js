const { google } = require('googleapis');
const sheets = google.sheets('v4');
const { ALL } = require('../constants');
const _ = require('lodash');

const _filterDataByEmployee = ({ topic, sheetData, identifiers }) =>
  sheetData.filter((row) =>
    identifiers.find((identifier) => _.trim(identifier) === _.trim(row[topic.employeeIdentifierIndex]))
  );

const getSheetData = async ({ topic, auth, identifiers }) => {
  const { spreadsheetId, sheetId, range } = topic;
  const request = {    
    spreadsheetId,
    range: `'${sheetId}'!${range}`,
    majorDimension: 'ROWS',
    valueRenderOption: 'FORMATTED_VALUE',
    dateTimeRenderOption: 'FORMATTED_STRING',
    auth,
  };

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.get(request, (err, response) => {
      if (err) {
        return reject(err);
      }
      const {
        data: { values },
      } = response;
      if (values) {
        return resolve(
          identifiers
            ? [
                _filterDataByEmployee({
                  topic,
                  sheetData: values.slice(1), //without original titles
                  identifiers,
                }),
                values[0],
              ]
            : [values.slice(1), values[0]]
        );
      } else {
        //no rows at the spread sheet at all
        return resolve([[], []]);
      }
    });
  });
};

const getEditUrlIndexIfPermitted = ({ topic, userRole }) => {
  const preFilledLink = _.get(topic, 'preFilledLink') || {};
  const { editUrlIndex } = preFilledLink;
  if (editUrlIndex && preFilledLink.roles.includes(userRole)) {
    return editUrlIndex;
  }
  return null;
};

const formatData = ({ sheetData, topic, userGroup, userRole, originalTitles }) => {
  const { fields, sectionTitle } = topic;
  const editUrlIndex = getEditUrlIndexIfPermitted({ topic, userRole });

  return sheetData.map((row) => {
    const formattedFields = fields.reduce((acc, field) => {
      if (
        (field.roles && !field.roles.includes(userRole)) ||
        (field.excludeRoles && field.excludeRoles.includes(userRole))
      ) {
        return acc;
      }

      if (userGroup !== ALL && field.group && !field.group.includes(userGroup)) return;

      const { title, grid, index } = field;
      const originalTitle = originalTitles[index];
      acc.push({ title: title || originalTitle, grid, value: row[index] || 'N/A', index });
      return acc;
    }, []);

    return {
      sectionTitle: row[sectionTitle.index],
      fields: formattedFields,
      editUrl: editUrlIndex ? row[editUrlIndex] : null,
    };
  });
};

module.exports = {
  getSheetData,
  formatData,
};
