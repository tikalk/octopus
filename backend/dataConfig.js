const { HR, LEADER, LIOR, SALES, FINANCE, ALL, EMPLOYEE } = require('./constants');

const employees = {
  spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
  sheetId: 'employees',
  range: 'A2:M1000',
  groupIndex: 2,
  displayNameIndex: 1,
  leaderIndex: 3,
  identifiersIndex: [0, 1, 9]
};

const topics = {
  general: {
    title: 'כללי',
    spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
    sheetId: 'employees',
    range: 'A2:ZZ1000',
    employeeIdentifierIndex: 0,
    sectionTitle: {
      index: 1
    },
    fields: [
      {
        title: 'רואדמאפ אחרון',
        index: 7,
        grid: 12
      },
      {
        title: 'שם באנגלית',
        index: 0,
        grid: 4
      },
      {
        title: 'מוביל',
        index: 3,
        grid: 4
      },
      {
        title: 'טלפון',
        index: 8,
        grid: 4
      },
      {
        title: 'פרופיל טכני',
        index: 5,
        grid: 4
      },
      {
        title: 'רמת ניסיון',
        index: 4,
        grid: 4,
        excludeRoles: [EMPLOYEE]
      },

      {
        title: 'רמה טכנית',
        index: 6,
        grid: 4,
        excludeRoles: [EMPLOYEE]
      },

      {
        title: 'לקוחות',
        index: 17,
        grid: 12
      },

      {
        title: 'זמן בטיקל',
        index: 16,
        grid: 4
      },
      {
        title: 'כתובת',
        index: 11,
        grid: 4
      },
      {
        title: 'יום הולדת',
        index: 13,
        grid: 4
      },
      {
        title: 'סטטוס משפחתי',
        index: 23,
        grid: 4
      },
      {
        title: 'מספר ילדים',
        index: 25,
        grid: 4
      },
      {
        title: 'שם בן / בת הזוג',
        index: 24,
        grid: 4
      }
    ]
  },
  catchup: {
    roles: [LEADER, HR, SALES, LIOR],
    title: 'תיעוד שיחות',
    spreadsheetId: '1ZyVHtZtasKt6Y_cWlk05N5_jmwywOTnlz4Fw7zHpUAQ',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSeeKfgf7OQwB21aH_twIpM9YOKImZ_RDBuDoNnNDhblOsTZGg/viewform?usp=pp_url&entry.2055705415={{name}}&entry.919242336={{group}}&entry.327553390={{me}}',
      roles: [LEADER, HR, SALES, LIOR]
    },
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם מנהל השיחה',
        index: 1,
        grid: 3
      },
      {
        title: 'תוכן השיחה',
        index: 4,
        grid: 9
      }
    ]
  },
  hr_personal_talks: {
    roles: [HR, LIOR],
    title: 'שיחות עם עובדים HR',
    spreadsheetId: '1xGeNQOkwVDr3xkK6xk9PaJE9qYtJgLVAyNPgRWaj3ng',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSd3pkWEFZUiv61MiW67Uv9LQmaPepgNOG81smJRRPaLyduXTA/viewform?usp=pp_url&entry.327553390={{me}}&entry.2055705415={{name}}&entry.919242336={{group}}',
      roles: [HR, LIOR]
    },
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם מנהל השיחה',
        index: 1,
        grid: 3
      },
      {
        title: 'תוכן השיחה',
        index: 4,
        grid: 9
      }
    ]
  },
  roadmap: {
    roles: [HR, LEADER, LIOR, SALES, ALL, EMPLOYEE],
    title: 'רואדמאפ',
    spreadsheetId: '1rGGQ2qH_Rsf3hc2axVQ0Q4tnRZmYB3ca_oC09qZdg2k',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSdGQIgkKGl6E-06r4UHgzWxlZ4P0dWLBDEeIU_-JtytVjnbgg/viewform?entry.784795528={{name}}&entry.2043706299={{group}}&entry.773064783={{me}}',
      roles: [LEADER],
      enableShortUrl: false
    },
    sheetId: '2017-2018',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 3,
    sectionTitle: {
      index: 0
    },
    reverseSections: true,
    fields: [
      {
        title: 'שביעות רצון של העובד מהמשימה',
        index: 7,
        grid: 4
      },
      {
        title: 'פירוט',
        index: 8,
        grid: 8
      },
      {
        title: 'שביעות רצון של העובד מההתקדמות המקצועית',
        index: 9,
        grid: 4
      },
      {
        title: 'פירוט',
        index: 10,
        grid: 4
      },
      {
        title: 'שאיפות מקצועיות',
        index: 11,
        grid: 12
      },
      {
        title: 'מטרות אליהן שואף העובד להגיע',
        index: 12,
        grid: 12
      },
      {
        title: 'איפה נמצא העובד ביחס למטרות שהוגדרו בשיחה הקודמת וביחס למטרות הנוכחיות',
        index: 13,
        grid: 12
      },
      {
        title: 'אילו אפשרויות עומדות בפני העובד להשיג את המטרות',
        index: 14,
        grid: 12
      },
      {
        title: 'התפתחות במסלול מומחיות',
        index: 15,
        grid: 6
      },
      {
        title: 'התפתחות במסלול פולסטאק',
        index: 16,
        grid: 6
      },
      {
        title: 'התפתחות במסלול הובלה טכנולוגית',
        index: 17,
        grid: 12
      },
      {
        title: 'סיכום יעדים לקראת הרואדמאפ הבאה',
        index: 18,
        grid: 12
      },
      {
        title: 'הערות',
        index: 19,
        grid: 12,
        excludeRoles: [EMPLOYEE]
      },
      {
        title: 'שביעות רצון המוביל מהתקדמות מקצועית',
        index: 20,
        grid: 4,
        excludeRoles: [EMPLOYEE]
      },
      {
        title: 'פירוט',
        index: 21,
        grid: 8,
        excludeRoles: [EMPLOYEE]
      },
      {
        title: 'הערות לגבי התפתחות המקצועית של העובד',
        index: 21,
        grid: 12,
        excludeRoles: [EMPLOYEE]
      }
    ],
    extend: [
      {
        roles: [HR, LEADER, LIOR, SALES, ALL, EMPLOYEE],
        title: '2019-2020',
        spreadsheetId: '1rGGQ2qH_Rsf3hc2axVQ0Q4tnRZmYB3ca_oC09qZdg2k',
        sheetId: '2019-2020',
        range: 'A2:Z1000',
        employeeIdentifierIndex: 3,
        sectionTitle: {
          index: 0
        },
        reverseSections: true,
        fields: [
          {
            title: 'שביעות רצון של העובד מהמשימה',
            index: 5,
            grid: 4
          },
          {
            title: 'פירוט',
            index: 6,
            grid: 8
          },
          {
            title: 'פידבק מהלקוח',
            index: 7,
            grid: 12
          },
          {
            title: 'שביעות רצון של העובד מההתקדמות המקצועית',
            index: 8,
            grid: 4
          },
          {
            title: 'פירוט',
            index: 9,
            grid: 8
          },
          {
            title: 'ריקאפ על היעדים מהשיחה השנתית',
            index: 10,
            grid: 12
          },
          {
            title: 'שאיפות מקצועיות לטווח הרחוק',
            index: 11,
            grid: 12
          },
          {
            title: 'מה נעשה לעומת היעדים שהוגדרו ברואדמאפ הקודם',
            index: 12,
            grid: 12
          },
          {
            title: 'התפתחות מקצועית - הגדרת מטרות לרבעון והתיחסות למצב נוכחי ביחס למטרות',
            index: 13,
            grid: 6
          },
          {
            title: 'התפתחות מקצועית - הגדרת יעדים',
            index: 14,
            grid: 6
          },
          {
            title: 'התפתחות בינאישית - הגדרת מטרות לרבעון והתיחסות למצב נוכחי ביחס למטרות',
            index: 15,
            grid: 6
          },
          {
            title: 'התפתחות בינאישית - הגדרת יעדים',
            index: 16,
            grid: 6
          },
          {
            title: 'הערות',
            index: 17,
            grid: 12,
            excludeRoles: [EMPLOYEE]
          },
          {
            title: 'שביעות רצון המוביל מהתקדמות מקצועית',
            index: 18,
            grid: 4,
            excludeRoles: [EMPLOYEE]
          },
          {
            title: 'פירוט',
            index: 19,
            grid: 8,
            excludeRoles: [EMPLOYEE]
          }
        ]
      }
    ]
  },
  'mission-satisfaction': {
    roles: [HR, LEADER, LIOR, ALL],
    title: 'שביעות רצון מהמשימה',
    spreadsheetId: '173F3_bTchw8o_FR7NTjGzsK3XhIc_hataXtWqpvPsdY',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSe0qFlr3RIlAJeSKpxOcfDm86nuyDtGbz0PL4mj17LSL2WzkA/viewform?usp=pp_url&entry.454226715={{name}}&entry.816043357={{group}}',
      roles: [HR, LIOR, HR],
      enableShortUrl: true
    },
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 1,
    sectionTitle: {
      index: 0
    },
    reverseSections: true,
    fields: [
      {
        title: 'שם הלקוח',
        index: 3,
        grid: 12
      },
      {
        title: 'מידת שביעות רצון',
        index: 6,
        grid: 12
      },
      {
        title: 'פירוט',
        index: 7,
        grid: 12
      },
      {
        title: 'שביעות רצון בהיבט בינאישי',
        index: 8,
        grid: 6
      },
      {
        title: 'פירוט',
        index: 9,
        grid: 6
      },
      {
        title: 'באיזו רמה מרגיש שמתפתח מקצועית',
        index: 10,
        grid: 6
      },
      {
        title: 'פירוט',
        index: 11,
        grid: 6
      },
      {
        title: 'מעוניין להחליף לקוח ?',
        index: 12,
        grid: 12
      },
      {
        title: 'הערות - הארות',
        index: 13,
        grid: 12
      }
    ]
  },
  'client-satisfaction': {
    roles: [HR, LEADER, LIOR, ALL, SALES],
    title: 'שביעות רצון לקוח',
    spreadsheetId: '1aR4v8CnGwWaMG9xuIHsy1COcaIJXOsw3q3XIMN8RWKY',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSeqkvqlqI8u3lnvBtsuZJ5BDnZTmaQsHa2TXNOu9MXcD-Ilhw/viewform?usp=pp_url&entry.2120553200={{name}}&entry.1231091577={{group}}',
      roles: [SALES, HR, LIOR],
      enableShortUrl: true
    },
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 3,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם הלקוח',
        index: 2,
        grid: 12
      },
      {
        title: 'שם המעריך',
        index: 4,
        grid: 6
      },
      {
        title: 'תפקיד המעריך',
        index: 5,
        grid: 6
      },
      {
        title: 'מידת שביעות רצונך מהעבודה עם עובד טיקל בהיבט המקצועי',
        index: 6,
        grid: 6
      },
      {
        title: 'פירוט',
        index: 7,
        grid: 6
      },
      {
        title: 'נקודות לשיפור ברמה המקצועית',
        index: 8,
        grid: 6
      },
      {
        title: 'איך היית מגדיר את העובד מבחינת הידע והניסיון',
        index: 9,
        grid: 6
      },
      {
        title: 'מידת שביעות רצונך מהעבודה עם עובד טיקל בהיבט הבינאישי',
        index: 10,
        grid: 6
      },
      {
        title: 'פירוט',
        index: 11,
        grid: 6
      },
      {
        title: 'מהן לדעתך הנקודות לשיפור בהיבט הבינאישי?',
        index: 12,
        grid: 12
      },
      {
        title: 'באיזו רמה סביר שתמליץ על העובד לקולגות?',
        index: 13,
        grid: 6
      },
      {
        title: 'הערות / הארות ונושאים נוספים שחשוב לך להעלות בהתייחס לעבודה מול עובד טיקל',
        index: 14,
        grid: 6
      },
      {
        title: 'מהי מידת שביעות רצונך מהשירות שאתה מקבל מטיקל?',
        index: 15,
        grid: 6
      },
      {
        title: 'האם לתחושתך לעובד יש ליווי מקצועי מטעם טיקל?',
        index: 16,
        grid: 6
      },

      {
        title: 'האם נעזרת/תעזר בעתיד בטיקל בבעיות/צרכים בתחומים נוספים?',
        index: 17,
        grid: 6
      },
      {
        title:
          'מהן לדעתך הנקודות לשיפור בהתייחס לשירות שאתה מקבל מטיקל או לחילופין ציפיות שהיו לך מהעבודה מולנו ולא התממשו?',
        index: 18,
        grid: 6
      },
      {
        title: 'באיזו רמה סביר שתמליץ על טיקל לקולגות?',
        index: 19,
        grid: 6
      },
      {
        title: 'הערות / הארות ונושאים נוספים שחשוב לך להעלות לגבי טיקל',
        index: 20,
        grid: 6
      }
    ]
  },
  reassignment: {
    roles: [HR, LIOR, SALES],
    title: 'שיחת ריאסיינמנט',
    spreadsheetId: '1BGtPg6OysjFLxW57StadGiD66SA2LHkxvuOplEncUqs',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSfWhSJlh6_zNeIADF83-0MfKQjp3OyQxriPoqE-xD1j0QKEcw/viewform?usp=pp_url&entry.1716844105={{name}}&entry.1759542796={{group}}&entry.314843341={{leader}}',
      roles: [HR],
      enableShortUrl: false
    },
    sheetId: 'Form responses 1',
    range: 'A2:AI1000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'סוג הריאסיינמנט',
        index: 21,
        grid: 6
      },
      {
        title: 'מוביל',
        index: 4,
        grid: 6
      },
      {
        title: 'סיבת סיום',
        index: 22,
        grid: 6
      },
      {
        title: 'מקצוע במשימה האחרונה',
        index: 23,
        grid: 6
      },
      {
        title: 'גמישות ואיזון ג״ג',
        index: 10,
        grid: 6
      },
      {
        title: 'ידע רלוונטי נוכחי',
        index: 24,
        grid: 6
      },
      {
        title: 'חוסרים משמעותיים',
        index: 27,
        grid: 6
      },
      {
        title: 'שאיפות ודגשים',
        index: 25,
        grid: 6
      },
      {
        title: 'רואדמאפ נוכחי',
        index: 28,
        grid: 6
      },
      {
        title: 'הערות ודגשים',
        index: 29,
        grid: 6
      },
      {
        title: 'חוזקות - מקצועי והתנהלות',
        index: 26,
        grid: 12
      }
    ]
  },
  'client-feedback-from-meeting': {
    roles: [HR, LIOR, SALES, LEADER],
    title: 'משוב פגישת שיבוץ',
    spreadsheetId: '12dkIBtbjKyz8pR-g2p1NR4lpKbwh0Od1PuzAnT2do4w',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSddwIcEPLG97tD_OP114NnrhG_xrF0TFIdpMdn_3U0_fJvvkg/viewform?usp=pp_url&entry.1393783689={{name}}',
      roles: [SALES],
      enableShortUrl: true
    },
    sheetId: 'Form Responses 1',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 5,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם החברה',
        index: 2,
        grid: 12
      },
      {
        title: 'שם המעריך',
        index: 3,
        grid: 3
      },
      {
        title: 'תפקיד המעריך',
        index: 4,
        grid: 9
      },
      {
        title: 'רמת התאמה למשימה',
        index: 6,
        grid: 3
      },
      {
        title: 'הסיבה לחוסר התאמה',
        index: 7,
        grid: 9
      },
      {
        title: 'התרשמות מקצועית',
        index: 8,
        grid: 3
      },
      {
        title: 'נקודות בולטות',
        index: 9,
        grid: 9
      },
      {
        title: 'חוסרים מקצועיים שבלטו',
        index: 10,
        grid: 12
      },
      {
        title: 'התרשמות בינאישית',
        index: 11,
        grid: 4
      },
      {
        title: 'נקודות בולטות לטובה',
        index: 12,
        grid: 4
      },
      {
        title: 'נקודות לשיפור',
        index: 13,
        grid: 4
      },
      {
        title: 'הערות',
        index: 14,
        grid: 12
      }
    ]
  },
  'leader-employee-feedback': {
    roles: [HR, LIOR, LEADER],
    title: 'חווד מוביל לקראת שיחה שנתית',
    spreadsheetId: '17m8Ys67Mi0kj_4O64OCBJS49eYbyIjTjlq3viXaPVx4',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSd6vo3B8IV0Tx8aNFWhKuMkNWj4eANeeKpFIbFst3QLnES-og/viewform?usp=pp_url&entry.338498330={{leader}}&entry.326186356={{name}}&entry.794708840={{group}}',
      roles: [LEADER],
      enableShortUrl: false
    },
    sheetId: '2019-2020',
    range: 'A2:Z1000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0
    },
    reverseSections: false,
    fields: [
      {
        title: 'מעריך',
        index: 1,
        grid: 12
      },
      {
        title: 'הרכה מקצועית',
        index: 4,
        grid: 3
      },
      {
        title: 'פירוט',
        index: 5,
        grid: 6
      },
      {
        title: 'הערכת רמת סיניוריטי',
        index: 6,
        grid: 3
      },
      {
        title: 'הערכה בינאישית',
        index: 7,
        grid: 3
      },
      {
        title: 'פירוט',
        index: 8,
        grid: 9
      },
      {
        title: 'נקודות החוזק העיקריות של העובד',
        index: 9,
        grid: 6
      },
      {
        title: 'נקודות לשיפור עליהן צריך העובד לעבוד',
        index: 10,
        grid: 6
      },
      {
        title: 'באיזו רמה עומד העובד ביעדים',
        index: 11,
        grid: 3
      },
      {
        title: 'פירוט',
        index: 12,
        grid: 9
      },
      {
        title: 'תרומה ומיצוב - כמה העובד פעיל ותורם במסגרת הטיקלית',
        index: 13,
        grid: 6
      },
      {
        title: 'מהן לדעתך ההישגים המשמעותיים של העובד בשנה האחרונה',
        index: 14,
        grid: 6
      },
      {
        title: 'אילו יעדים שנתיים היית ממליץ להציב לעובד במשגרת השיחה השנתית',
        index: 15,
        grid: 12
      },
      {
        title: 'הערות',
        index: 16,
        grid: 12
      }
    ]
  }
};

module.exports = {
  employees,
  topics
};
