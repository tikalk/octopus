const { HR, LEADER, LIOR, SALES, FINANCE, ALL, EMPLOYEE } = require('./constants');

const employees = {
  spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
  sheetId: 'employees',
  range: 'A1:M1000',
  groupIndex: 2,
  displayNameIndex: 1,
  leaderIndex: 3,
  identifiersIndex: [0, 1, 9],
};

const annualMeeting = {
  roles: [HR, LIOR, LEADER],
  title: 'שיחה שנתית',
  spreadsheetId: '1LjB42Vr8bGWEcDcNBEc3PuSEcc8oF7jfh7yJt2hpCAA',
  range: 'A1:AN1000',
  employeeIdentifierIndex: 2,
  sectionTitle: {
    index: 0,
  },
  reverseSections: false,
  fields: [
    {
      _title: 'ממוצע 3 המדדים',
      index: 4,
      grid: 6,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת סניוריטי',
      index: 5,
      grid: 6,
      excludeRoles: [LEADER],
    },
    {
      _title: 'הצלחות',
      index: 6,
      grid: 12,
    },
    {
      _title: 'האם יצר אימפקט',
      index: 7,
      grid: 12,
    },
    {
      _title: 'נקודות חוזק',
      index: 8,
      grid: 6,
    },
    {
      _title: 'נקודות לשיפור',
      index: 9,
      grid: 6,
    },
    {
      _title: 'תגובת העובד',
      index: 10,
      grid: 12,
    },
    {
      _title: 'עמידה ביעדין ואיפה העובד נמצא ביחס ליעדים',
      index: 31,
      grid: 12,
    },
    {
      _title: 'הצעה ליעדים',
      index: 32,
      grid: 12,
    },
    {
      _title: 'יעדים שיוגדרו במשותף לשנה הבאה',
      index: 33,
      grid: 12,
    },
    {
      _title: 'רמה מקצועית',
      index: 11,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת התקדמות מקצועית',
      index: 12,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת התקדמות ביעדי הרואדמאפ',
      index: 13,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת חווית המאטש',
      index: 14,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת חווית לקוח',
      index: 15,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'שירותיות',
      index: 16,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'ממוצע מקצועי',
      index: 17,
      grid: 12,
      excludeRoles: [LEADER],
    },
    {
      _title: 'תקשורתיות',
      index: 18,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'גמישות',
      index: 19,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'תשוקה טכנולוגית',
      index: 20,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'מחוייבות, אחריות',
      index: 21,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'מוטיבציה',
      index: 22,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'עצמאות',
      index: 23,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'יכולת פתרון בעיות',
      index: 24,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'יכולות הובלה',
      index: 25,
      grid: 3,
      excludeRoles: [LEADER],
    },
    {
      _title: 'ממוצע בינאישי',
      index: 26,
      grid: 12,
      excludeRoles: [LEADER],
    },
    {
      _title: 'מידת השתתפות בשגרה הטיקלית',
      index: 27,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'מידת המעורבות והתרומה',
      index: 28,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'רמת שייכות טיקלית',
      index: 29,
      grid: 4,
      excludeRoles: [LEADER],
    },
    {
      _title: 'ממוצע טיקל',
      index: 30,
      grid: 12,
      excludeRoles: [LEADER],
    },
  ],
};

const topics = {
  general: {
    title: 'כללי',
    spreadsheetId: '1c5xPeWDm6JlEtwL-BhM3kVfIbUlNsf61Y4KaFoSlwtU',
    sheetId: 'employees',
    range: 'A1:ZZ1000',
    employeeIdentifierIndex: 0,
    sectionTitle: {
      index: 1,
    },
    fields: [
      {
        title: 'רואדמאפ אחרון',
        index: 7,
        grid: 12,
      },
      {
        title: 'שם באנגלית',
        index: 0,
        grid: 4,
      },
      {
        title: 'מוביל',
        index: 3,
        grid: 4,
      },
      {
        title: 'טלפון',
        index: 8,
        grid: 4,
      },
      {
        title: 'פרופיל טכני',
        index: 5,
        grid: 4,
      },
      {
        title: 'רמת ניסיון',
        index: 4,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },

      {
        title: 'רמה טכנית',
        index: 6,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },

      {
        title: 'לקוחות',
        index: 17,
        grid: 12,
      },

      {
        title: 'זמן בטיקל',
        index: 16,
        grid: 4,
      },
      {
        title: 'כתובת',
        index: 11,
        grid: 4,
      },
      {
        title: 'יום הולדת',
        index: 13,
        grid: 4,
      },
      {
        title: 'סטטוס משפחתי',
        index: 23,
        grid: 4,
      },
      {
        title: 'מספר ילדים',
        index: 25,
        grid: 4,
      },
      {
        title: 'שם בן / בת הזוג',
        index: 24,
        grid: 4,
      },
    ],
  },
  catchup: {
    roles: [LEADER, HR, SALES, LIOR],
    title: 'תיעוד שיחות',
    spreadsheetId: '1ZyVHtZtasKt6Y_cWlk05N5_jmwywOTnlz4Fw7zHpUAQ',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSeeKfgf7OQwB21aH_twIpM9YOKImZ_RDBuDoNnNDhblOsTZGg/viewform?usp=pp_url&entry.2055705415={{name}}&entry.919242336={{group}}&entry.327553390={{me}}',
      roles: [LEADER, HR, SALES, LIOR],
      editUrlIndex: 5,
    },
    sheetId: 'Form Responses 1',
    range: 'A1:Z9000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם מנהל השיחה',
        index: 1,
        grid: 3,
      },
      {
        title: 'תוכן השיחה',
        index: 4,
        grid: 9,
      },
    ],
  },
  hr_personal_talks: {
    roles: [HR, LIOR],
    title: 'שיחות עם עובדים HR',
    spreadsheetId: '1xGeNQOkwVDr3xkK6xk9PaJE9qYtJgLVAyNPgRWaj3ng',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSd3pkWEFZUiv61MiW67Uv9LQmaPepgNOG81smJRRPaLyduXTA/viewform?usp=pp_url&entry.327553390={{me}}&entry.2055705415={{name}}&entry.919242336={{group}}',
      roles: [HR, LIOR],
      editUrlIndex: 5,
    },
    sheetId: 'Form Responses 1',
    range: 'A1:Z9000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם מנהל השיחה',
        index: 1,
        grid: 3,
      },
      {
        title: 'תוכן השיחה',
        index: 4,
        grid: 9,
      },
    ],
  },
  roadmap: {
    roles: [HR, LEADER, LIOR, SALES, ALL, EMPLOYEE],
    title: 'רואדמאפ',
    spreadsheetId: '1rGGQ2qH_Rsf3hc2axVQ0Q4tnRZmYB3ca_oC09qZdg2k',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSdGQIgkKGl6E-06r4UHgzWxlZ4P0dWLBDEeIU_-JtytVjnbgg/viewform?entry.784795528={{name}}&entry.2043706299={{group}}&entry.773064783={{me}}',
      roles: [LEADER],
      enableShortUrl: true,
      editUrlIndex: 30,
    },
    sheetId: '2017-2018',
    range: 'A1:Z9000',
    employeeIdentifierIndex: 3,
    sectionTitle: {
      index: 0,
    },
    reverseSections: true,
    fields: [
      {
        title: 'מוביל מבצע הרואדמאפ:',
        index: 2,
        grid: 12,
      },
      {
        title: 'שביעות רצון של העובד מהמשימה',
        index: 5,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'פירוט',
        index: 6,
        grid: 8,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'שביעות רצון העובד מהמעורבות בטיקל',
        index: 8,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'פירוט',
        index: 10,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'שביעות רצון של העובד מההתקדמות המקצועית',
        index: 9,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'פירוט',
        index: 10,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'שאיפות מקצועיות',
        index: 11,
        grid: 12,
      },
      {
        title: 'מטרות אליהן שואף העובד להגיע',
        index: 12,
        grid: 12,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'איפה נמצא העובד ביחס למטרות שהוגדרו בשיחה הקודמת וביחס למטרות הנוכחיות',
        index: 13,
        grid: 12,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'אילו אפשרויות עומדות בפני העובד להשיג את המטרות',
        index: 14,
        grid: 12,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'התפתחות במסלול מומחיות',
        index: 15,
        grid: 6,
      },
      {
        title: 'התפתחות במסלול פולסטאק',
        index: 16,
        grid: 6,
      },
      {
        title: 'התפתחות במסלול הובלה טכנולוגית',
        index: 17,
        grid: 12,
      },
      {
        title: 'סיכום יעדים לקראת הרואדמאפ הבאה',
        index: 18,
        grid: 12,
      },
      {
        title: 'הערות',
        index: 19,
        grid: 12,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'שביעות רצון המוביל מהתקדמות מקצועית',
        index: 20,
        grid: 4,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'פירוט',
        index: 21,
        grid: 8,
        excludeRoles: [EMPLOYEE],
      },
      {
        title: 'הערות לגבי התפתחות המקצועית של העובד',
        index: 21,
        grid: 12,
        excludeRoles: [EMPLOYEE],
      },
    ],
    extend: [
      {
        roles: [HR, LEADER, LIOR, SALES, ALL, EMPLOYEE],
        title: '2019-2020',
        spreadsheetId: '1rGGQ2qH_Rsf3hc2axVQ0Q4tnRZmYB3ca_oC09qZdg2k',
        sheetId: '2019-2020',
        range: 'A1:BZ1000',
        employeeIdentifierIndex: 3,
        sectionTitle: {
          index: 0,
        },
        reverseSections: true,
        fields: [
          {
            title: 'מוביל מבצע הרואדמאפ',
            index: 2,
            grid: 12,
          },
          {
            title: 'שביעות רצון של העובד מהמשימה',
            index: 5,
            grid: 4,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פירוט',
            index: 6,
            grid: 8,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פידבק מלקוח ותגובת העובד לפידבק',
            index: 7,
            grid: 12,
            excludeRoles: [EMPLOYEE],
          },

          {
            title: 'שביעות רצון העובד מהמעורבות שלו בטיקל',
            index: 8,
            grid: 4,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פירוט',
            index: 9,
            grid: 8,
            excludeRoles: [EMPLOYEE],
          },

          {
            title: 'שביעות רצון של העובד מההתקדמות המקצועית',
            index: 10,
            grid: 4,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פירוט',
            index: 11,
            grid: 8,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'ריקאפ על היעדים מהשיחה השנתית',
            index: 12,
            grid: 12,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'שאיפות מקצועיות לטווח הרחוק',
            index: 13,
            grid: 12,
          },
          {
            title: 'מה נעשה לעומת היעדים שהוגדרו ברואדמאפ הקודם',
            index: 14,
            grid: 12,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'התפתחות מקצועית - הגדרת מטרות לרבעון והתיחסות למצב נוכחי ביחס למטרות',
            index: 15,
            grid: 6,
          },
          {
            title: 'התפתחות מקצועית - הגדרת יעדים',
            index: 16,
            grid: 6,
          },
          {
            title: 'התפתחות בינאישית - הגדרת מטרות לרבעון והתיחסות למצב נוכחי ביחס למטרות',
            index: 17,
            grid: 6,
          },
          {
            title: 'התפתחות בינאישית - הגדרת יעדים',
            index: 18,
            grid: 6,
          },
          {
            title: 'הערות',
            index: 19,
            grid: 12,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'שביעות רצון המוביל מהתקדמות מקצועית',
            index: 20,
            grid: 4,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פירוט',
            index: 21,
            grid: 8,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'באיזו רמה מעורב העובד בעשייה הטיקלית',
            index: 22,
            grid: 4,
            excludeRoles: [EMPLOYEE],
          },
          {
            title: 'פירוט',
            index: 23,
            grid: 8,
            excludeRoles: [EMPLOYEE],
          },
        ],
      },
    ],
  },
  'mission-satisfaction': {
    roles: [HR, LEADER, LIOR, ALL],
    title: 'שביעות רצון מהמשימה',
    spreadsheetId: '173F3_bTchw8o_FR7NTjGzsK3XhIc_hataXtWqpvPsdY',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSe0qFlr3RIlAJeSKpxOcfDm86nuyDtGbz0PL4mj17LSL2WzkA/viewform?usp=pp_url&entry.454226715={{name}}&entry.816043357={{group}}',
      roles: [HR, LIOR, HR],
      enableShortUrl: true,
    },
    sheetId: 'Form Responses 1',
    range: 'A1:Z9000',
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
        index: 6,
        grid: 12,
      },
      {
        title: 'פירוט',
        index: 7,
        grid: 12,
      },
      {
        title: 'שביעות רצון בהיבט בינאישי',
        index: 8,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 9,
        grid: 6,
      },
      {
        title: 'באיזו רמה מרגיש שמתפתח מקצועית',
        index: 10,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 11,
        grid: 6,
      },
      {
        title: 'מעוניין להחליף לקוח ?',
        index: 12,
        grid: 12,
      },
      {
        title: 'הערות - הארות',
        index: 13,
        grid: 12,
      },
    ],
  },
  'client-satisfaction': {
    roles: [HR, LEADER, LIOR, ALL, SALES],
    title: 'שביעות רצון לקוח',
    spreadsheetId: '1aR4v8CnGwWaMG9xuIHsy1COcaIJXOsw3q3XIMN8RWKY',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSeqkvqlqI8u3lnvBtsuZJ5BDnZTmaQsHa2TXNOu9MXcD-Ilhw/viewform?usp=pp_url&entry.2120553200={{name}}&entry.1231091577={{group}}',
      roles: [SALES, HR, LIOR],
      enableShortUrl: true,
      editUrlIndex: 23,
    },
    sheetId: 'Form Responses 1',
    range: 'A1:Z9000',
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
        title: 'מידת שביעות רצונך מהעבודה עם עובד טיקל בהיבט המקצועי',
        index: 6,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 7,
        grid: 6,
      },
      {
        title: 'נקודות לשיפור ברמה המקצועית',
        index: 8,
        grid: 6,
      },
      {
        title: 'איך היית מגדיר את העובד מבחינת הידע והניסיון',
        index: 9,
        grid: 6,
      },
      {
        title: 'מידת שביעות רצונך מהעבודה עם עובד טיקל בהיבט הבינאישי',
        index: 10,
        grid: 6,
      },
      {
        title: 'פירוט',
        index: 11,
        grid: 6,
      },
      {
        title: 'מהן לדעתך הנקודות לשיפור בהיבט הבינאישי?',
        index: 12,
        grid: 12,
      },
      {
        title: 'באיזו רמה סביר שתמליץ על העובד לקולגות?',
        index: 13,
        grid: 6,
      },
      {
        title: 'הערות / הארות ונושאים נוספים שחשוב לך להעלות בהתייחס לעבודה מול עובד טיקל',
        index: 14,
        grid: 6,
      },
      {
        title: 'מהי מידת שביעות רצונך מהשירות שאתה מקבל מטיקל?',
        index: 15,
        grid: 6,
      },
      {
        title: 'האם לתחושתך לעובד יש ליווי מקצועי מטעם טיקל?',
        index: 16,
        grid: 6,
      },

      {
        title: 'האם נעזרת/תעזר בעתיד בטיקל בבעיות/צרכים בתחומים נוספים?',
        index: 17,
        grid: 6,
      },
      {
        title:
          'מהן לדעתך הנקודות לשיפור בהתייחס לשירות שאתה מקבל מטיקל או לחילופין ציפיות שהיו לך מהעבודה מולנו ולא התממשו?',
        index: 18,
        grid: 6,
      },
      {
        title: 'באיזו רמה סביר שתמליץ על טיקל לקולגות?',
        index: 19,
        grid: 6,
      },
      {
        title: 'הערות / הארות ונושאים נוספים שחשוב לך להעלות לגבי טיקל',
        index: 20,
        grid: 6,
      },
    ],
  },
  reassignment: {
    roles: [HR, LIOR, SALES],
    title: 'שיחת ריאסיינמנט',
    spreadsheetId: '1BGtPg6OysjFLxW57StadGiD66SA2LHkxvuOplEncUqs',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSfWhSJlh6_zNeIADF83-0MfKQjp3OyQxriPoqE-xD1j0QKEcw/viewform?usp=pp_url&entry.1716844105={{name}}&entry.1759542796={{group}}&entry.314843341={{leader}}',
      roles: [HR],
      enableShortUrl: false,
      editUrlIndex: 33,
    },
    sheetId: 'Form responses 1',
    range: 'A1:AI9000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'סוג הריאסיינמנט',
        index: 21,
        grid: 6,
      },
      {
        title: 'מוביל',
        index: 4,
        grid: 6,
      },
      {
        title: 'סיבת סיום',
        index: 22,
        grid: 6,
      },
      {
        title: 'מקצוע במשימה האחרונה',
        index: 23,
        grid: 6,
      },
      {
        title: 'גמישות ואיזון ג״ג',
        index: 10,
        grid: 6,
      },
      {
        title: 'ידע רלוונטי נוכחי',
        index: 24,
        grid: 6,
      },
      {
        title: 'חוסרים משמעותיים',
        index: 27,
        grid: 6,
      },
      {
        title: 'שאיפות ודגשים',
        index: 25,
        grid: 6,
      },
      {
        title: 'רואדמאפ נוכחי',
        index: 28,
        grid: 6,
      },
      {
        title: 'הערות ודגשים',
        index: 29,
        grid: 6,
      },
      {
        title: 'חוזקות - מקצועי והתנהלות',
        index: 26,
        grid: 12,
      },
    ],
  },
  'client-feedback-from-meeting': {
    roles: [HR, LIOR, SALES, LEADER],
    title: 'משוב פגישת שיבוץ',
    spreadsheetId: '12dkIBtbjKyz8pR-g2p1NR4lpKbwh0Od1PuzAnT2do4w',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSddwIcEPLG97tD_OP114NnrhG_xrF0TFIdpMdn_3U0_fJvvkg/viewform?usp=pp_url&entry.1393783689={{name}}',
      roles: [SALES],
      enableShortUrl: true,
      editUrlIndex: 18,
    },
    sheetId: 'Form Responses 1',
    range: 'A1:Z9000',
    employeeIdentifierIndex: 5,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'שם החברה',
        index: 2,
        grid: 12,
      },
      {
        title: 'שם המעריך',
        index: 3,
        grid: 3,
      },
      {
        title: 'תפקיד המעריך',
        index: 4,
        grid: 9,
      },
      {
        title: 'רמת התאמה למשימה',
        index: 6,
        grid: 3,
      },
      {
        title: 'הסיבה לחוסר התאמה',
        index: 7,
        grid: 9,
      },
      {
        title: 'התרשמות מקצועית',
        index: 8,
        grid: 3,
      },
      {
        title: 'נקודות בולטות',
        index: 9,
        grid: 9,
      },
      {
        title: 'חוסרים מקצועיים שבלטו',
        index: 10,
        grid: 12,
      },
      {
        title: 'התרשמות בינאישית',
        index: 11,
        grid: 4,
      },
      {
        title: 'נקודות בולטות לטובה',
        index: 12,
        grid: 4,
      },
      {
        title: 'נקודות לשיפור',
        index: 13,
        grid: 4,
      },
      {
        title: 'הערות',
        index: 14,
        grid: 12,
      },
    ],
  },
  'leader-employee-feedback': {
    roles: [HR, LIOR, LEADER],
    title: 'חווד מוביל לקראת שיחה שנתית',
    spreadsheetId: '17m8Ys67Mi0kj_4O64OCBJS49eYbyIjTjlq3viXaPVx4',
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSd6vo3B8IV0Tx8aNFWhKuMkNWj4eANeeKpFIbFst3QLnES-og/viewform?usp=pp_url&entry.338498330={{leader}}&entry.326186356={{name}}&entry.794708840={{group}}',
      roles: [LEADER],
      enableShortUrl: false,
      editUrlIndex: 23,
    },
    sheetId: '2019-2020',
    range: 'A1:Z9000',
    employeeIdentifierIndex: 2,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        title: 'מעריך',
        index: 1,
        grid: 12,
      },
      {
        title: 'הרכה מקצועית',
        index: 4,
        grid: 3,
      },
      {
        title: 'פירוט',
        index: 5,
        grid: 6,
      },
      {
        title: 'הערכת רמת סיניוריטי',
        index: 6,
        grid: 3,
      },
      {
        title: 'הערכה בינאישית',
        index: 7,
        grid: 3,
      },
      {
        title: 'פירוט',
        index: 8,
        grid: 9,
      },
      {
        title: 'נקודות החוזק העיקריות של העובד',
        index: 9,
        grid: 6,
      },
      {
        title: 'נקודות לשיפור עליהן צריך העובד לעבוד',
        index: 10,
        grid: 6,
      },
      {
        title: 'באיזו רמה עומד העובד ביעדים',
        index: 11,
        grid: 3,
      },
      {
        title: 'פירוט',
        index: 12,
        grid: 9,
      },
      {
        title: 'תרומה ומיצוב - כמה העובד פעיל ותורם במסגרת הטיקלית',
        index: 13,
        grid: 6,
      },
      {
        title: 'מהן לדעתך ההישגים המשמעותיים של העובד בשנה האחרונה',
        index: 14,
        grid: 6,
      },
      {
        title: 'אילו יעדים שנתיים היית ממליץ להציב לעובד במשגרת השיחה השנתית',
        index: 15,
        grid: 12,
      },
      {
        title: 'הערות',
        index: 16,
        grid: 12,
      },
    ],
  },
  'annual-meeting': {
    roles: [HR, LIOR, LEADER],
    title: 'שיחה שנתית',
    spreadsheetId: '1LjB42Vr8bGWEcDcNBEc3PuSEcc8oF7jfh7yJt2hpCAA',
    onlyOwnLeader: true,
    preFilledLink: {
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSd8PVxSkPxJm6O-XPgpH4P86tdr63hjGhyHH4iw9JAiEd5uVg/viewform?usp=pp_url&entry.877733556={{name}}&entry.352710070={{group}}',
      roles: [LIOR],
      enableShortUrl: false,
      editUrlIndex: 34,
    },
    sheetId: '2019',
    range: 'A2:AE9000',
    employeeIdentifierIndex: 3,
    sectionTitle: {
      index: 0,
    },
    reverseSections: false,
    fields: [
      {
        _title: 'רמת סניוריטי',
        index: 5,
        grid: 12,
        excludeRoles: [LEADER],
      },
      {
        _title: 'עמידה ביעדים',
        index: 24,
        grid: 12,
      },
      {
        _title: 'הצלחות והשגים',
        index: 25,
        grid: 12,
      },
      {
        _title: 'נקודות חוזק',
        index: 26,
        grid: 6,
      },
      {
        _title: 'נקודות לשיפור',
        index: 27,
        grid: 6,
      },
      {
        _title: 'יעדים',
        index: 28,
        grid: 12,
      },
      {
        _title: 'תגובת העובד',
        index: 29,
        grid: 12,
      },
      {
        _title: 'יעדים שיוגדרו במשותף',
        index: 30,
        grid: 12,
      },

      {
        _title: 'רמת הידע המקצועי',
        index: 6,
        grid: 3,
        excludeRoles: [LEADER],
      },
      {
        _title: 'התקדמות בשנה האחרונה',
        index: 7,
        grid: 3,
        excludeRoles: [LEADER],
      },
      {
        _title: 'עמידה ביעדים השנתיים ויעדי הרואדמאפ',
        index: 8,
        grid: 3,
        excludeRoles: [LEADER],
      },
      {
        _title: 'רמת חווית לקוח',
        index: 9,
        grid: 3,
        excludeRoles: [LEADER],
      },
      {
        _title: 'ממוצע מקצועי',
        index: 10,
        grid: 12,
        excludeRoles: [LEADER],
      },
      {
        _title: 'שירותיות',
        index: 11,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'עצמאות',
        index: 12,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'תשוקה לטכנולוגיה',
        index: 13,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'גמישות',
        index: 14,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'מחויבות ואחריות',
        index: 15,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'תקשורתיות',
        index: 16,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'מוטיבציה וגישה חיובית',
        index: 17,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'יכולת למידה עצמאית',
        index: 18,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'נתינה',
        index: 19,
        grid: 4,
        excludeRoles: [LEADER],
      },
      {
        _title: 'ממוצע בינאישי',
        index: 20,
        grid: 12,
        excludeRoles: [LEADER],
      },
      {
        _title: 'מידת השתתפות בשגרה הטיקלית',
        index: 21,
        grid: 6,
        excludeRoles: [LEADER],
      },
      {
        _title: 'מידת המעורבות והתרומה',
        index: 22,
        grid: 6,
        excludeRoles: [LEADER],
      },
      {
        _title: 'ממוצע מעורבות ושיכות',
        index: 23,
        grid: 12,
        excludeRoles: [LEADER],
      },
    ],
    extend: [
      {
        sheetId: '2020',
        ...annualMeeting,
      },
      {
        sheetId: '2021',
        ...annualMeeting,
      },
    ],
  },
};

module.exports = {
  employees,
  topics,
};
