const {HR, LEADER, LIOR, FINANCE} = require('./constants');

const employees = {
    spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
    sheetId: 'employees',
    range: 'A2:M1000',
    groupIndex: 2,
    displayNameIndex: 1,
    identifiersIndex: [0, 1, 4, 7],
};

const topics = {
    general: {
        title: 'כללי',
        spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
        sheetId: 'employees',
        range: 'A2:ZZ1000',
        employeeIdentifierIndex: 0,
        sectionTitle: {
            index: 1,
        },
        fields: [
            {
                title: 'זמן בטיקל',
                index: 12,
                grid: 12,
            },
            {
                title: 'כתובת',
                index: 5,
                grid: 6,
            },
            {
                title: 'יום הולדת',
                index: 10,
                grid: 6,
            },
            {
                title: 'סטטוס משפחתי',
                index: 16,
                grid: 6,
            },
            {
                title: 'מספר ילדים',
                index: 18,
                grid: 6,
            },
            {
                title: 'שם בן / בת הזוג',
                index: 17,
                grid: 6,
            },
        ],
        extend: [
            {
                title: 'פרטים נוספים',
                spreadsheetId: '1xPQBVxjvTo4KXwMIFqZb-jeTqY_EQmOMPWklHO6OUPU',
                sheetId: 'Members',
                range: 'A2:ZZ1000',
                employeeIdentifierIndex: 0,
                sectionTitle: {
                    index: 1,
                },
                fields: [
                    {
                        title: 'מוביל',
                        index: 3,
                        grid: 12,
                    },
                    {
                        title: 'רמת ניסיון',
                        index: 2,
                        grid: 6,
                    },
                    {
                        title: 'פרופיל טכני',
                        index: 4,
                        grid: 6,
                    },
                    {
                        title: 'רמה טכנית',
                        index: 5,
                        grid: 6,
                    },
                    {
                        title: 'רואדמאפ אחרון',
                        index: 6,
                        grid: 6,
                    },
                ]
            }
        ]
    },
    'mission-satisfaction': {
        roles: [HR, LEADER, LIOR],
        title: 'שביעות רצון מהמשימה',
        spreadsheetId: '173F3_bTchw8o_FR7NTjGzsK3XhIc_hataXtWqpvPsdY',
        sheetId: 'Form Responses 1',
        range: 'A2:Z1000',
        employeeIdentifierIndex: 1,
        sectionTitle: {
            index: 0,
        },
        reverseSections: true,
        fields: [
            {
                title: 'שם הלקוח',
                index: 3,
                grid: 12,
            },
            {
                title: 'מידת שביעות רצון',
                index: 5,
                grid: 12,
            },
            {
                title: 'פירוט',
                index: 6,
                grid: 12,
            },
            {
                title: 'שביעות רצון בהיבט בינאישי',
                index: 7,
                grid: 6,
            },
            {
                title: 'פירוט',
                index: 8,
                grid: 6,
            },
            {
                title: 'באיזו רמה מרגיש שמתפתח מקצועית',
                index: 9,
                grid: 6,
            },
            {
                title: 'פירוט',
                index: 10,
                grid: 6,
            },
            {
                title: 'מעוניין להחליף לקוח ?',
                index: 11,
                grid: 12,
            },
            {
                title: 'הערות - הארות',
                index: 12,
                grid: 12,
            },
        ],
    },
    'client-satisfaction': {
        roles: [HR, LEADER, LIOR],
        title: 'שביעות רצון לקוח',
        spreadsheetId: '1aR4v8CnGwWaMG9xuIHsy1COcaIJXOsw3q3XIMN8RWKY',
        sheetId: 'Form Responses 1',
        range: 'A2:Z1000',
        employeeIdentifierIndex: 3,
        sectionTitle: {
            index: 0,
        },
        reverseSections: false,
        fields: [
            {
                title: 'שם הלקוח',
                index: 2,
                grid: 12,
            },
            {
                title: 'שם המעריך',
                index: 4,
                grid: 6,
            },
            {
                title: 'תפקיד המעריך',
                index: 5,
                grid: 6,
            },
            {
                title: 'מידת שביעות רצון עם העבודה עם טיקל',
                index: 6,
                grid: 6,
            },
            {
                title: 'פירוט',
                index: 7,
                grid: 6,
            },
            {
                title: 'נקודות לשיפור מבחינה מקצועית',
                index: 8,
                grid: 6,
            },
            {
                title: 'איך היית מגדיר את העובד מבחינת הניסיון',
                index: 9,
                grid: 6,
            },
            {
                title: 'מידת שביעות הרצון מהעובד',
                index: 10,
                grid: 6,
            },
            {
                title: 'פירוט',
                index: 11,
                grid: 6,
            },
            {
                title: 'נקודות לשיפור מבחינת מתן השירות',
                index: 12,
                grid: 12,
            },

            {
                title: 'האם לתחושתך לעובד יש ליוי מקצועי מטעם טיקל',
                index: 15,
                grid: 12,
            },
            {
                title: 'הערות לגבי טיקל באופן כללי',
                index: 19,
                grid: 12,
            },
        ],
    },
};

module.exports = {
    employees,
    topics,
};