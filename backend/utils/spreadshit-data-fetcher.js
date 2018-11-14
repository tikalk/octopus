const {google} = require('googleapis');
const sheets = google.sheets('v4');

const _filterDataByEmployee = ({topic, sheetData, identifiers}) =>
    sheetData.filter(row =>
        identifiers.find(identifier => identifier === row[topic.employeeIdentifierIndex]));

const getSheetData = async ({topic, auth, identifiers}) => {
    const {spreadsheetId, sheetId, range} = topic;
    const request = {
        // The ID of the spreadsheet to retrieve data from.
        spreadsheetId,  // TODO: Update placeholder value.
        range: `'${sheetId}'!${range}`,  // TODO: Update placeholder value.
        majorDimension: 'ROWS',
        valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.
        dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.
        auth: auth,
    };

    return new Promise((resolve, reject) => {
        sheets.spreadsheets.values.get(request, (err, response) => {
            if (err) {
                return reject(err);
            }
            const {data: {values}} = response;
            return resolve(identifiers ? _filterDataByEmployee({topic, sheetData: values, identifiers}) : values)
        });
    });
};

const formatData = ({sheetData, topic, userGroup, userRole}) => {
    const {fields, sectionTitle} = topic;
    return sheetData.map(row => {
        const formattedFields = fields.reduce((acc, field) => {
            if (field.roles && !field.roles.includes(userRole)) return;
            if (field.group && !field.group.includes(userGroup)) return;

            const {title, grid, index} = field;
            acc.push({title, grid, value: row[index] || 'N/A', index});
            return acc;
        }, []);

        return {
            sectionTitle: row[sectionTitle.index],
            fields: formattedFields,
        };
    });

};

module.exports = {
    getSheetData,
    formatData,
};