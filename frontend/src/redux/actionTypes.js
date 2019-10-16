//******************************
//****       Core           ****
//******************************

//core - API
export const API_REQUEST = 'API_REQUEST';
const apiAction = action => ({
  SOURCE: `${action}`,
  API_REQUEST: `${action}.${API_REQUEST}`,
  SUCCESS: `${action}.SUCCESS`,
  ERROR: `${action}.ERROR`
});

export const SET_ERROR = 'SET_ERROR';

// Auth
export const AUTH = '[AUTH]';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_ME = 'SET_ME';

// Topics
export const TOPICS = '[TOPICS]';
export const GET_TOPICS = apiAction('GET_TOPICS');
export const SET_TOPICS = 'SET_TOPICS';
export const SET_LOAD_TOPICS_ERROR = 'SET_LOAD_TOPICS_ERROR';
export const SET_SELECTED_TOPIC = 'SET_SELECTED_TOPIC';

export const TOPIC_SELECTED = 'TOPIC_SELECTED';
export const REFRESH_TOPIC_CLICKED = 'REFRESH_TOPIC_CLICKED';

export const GET_TOPIC_DATA = apiAction('GET_TOPIC_DATA');
export const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
export const SET_LOAD_TOPIC_DATA_ERROR = 'SET_LOAD_TOPIC_DATA_ERROR';
export const PRE_FILLED_FORM_CLICKED = 'PRE_FILLED_FORM_CLICKED';
export const SET_PRE_FILLED_FORM_URL = 'SET_PRE_FILLED_FORM_URL';
export const SET_FORM_DIALOG_STATE = 'SET_FORM_DIALOG_STATE';

//EMPLOYEES
export const EMPLOYEES = '[EMPLOYEES]';
export const GET_EMPLOYEES = apiAction('GET_EMPLOYEES');
export const SET_EMPLOYEES = 'SET_EMPLOYEES';
export const EMPLOYEE_SELECTED = 'EMPLOYEE_SELECTED';
export const SET_SELECTED_EMPLOYEE = 'SET_SELECTED_EMPLOYEE';

//LOADERS
export const LOADERS = '[LOADERS]';
export const SET_LOADER = 'SET_LOADER';

//UI
export const UI = '[UI]';
export const WINDOW_IS_BEING_RESIZED = 'WINDOW_IS_BEING_RESIZED';
export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';
export const SET_MENU_OPEN_STATE = 'SET_MENU_OPEN_STATE';
