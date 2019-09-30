import * as AT from '../../actionTypes';

const { UI } = AT;

export const windowIsBeingResized = ({ width }) => {
  return {
    type: AT.WINDOW_IS_BEING_RESIZED,
    payload: { width },
    meta: {
      feature: UI
    }
  };
};

export const setWindowWith = ({ width }) => {
  return {
    type: AT.SET_WINDOW_WITH,
    payload: { width },
    meta: {
      feature: UI
    }
  };
};

export const setMenuOpenState = ({ state }) => {
  return {
    type: AT.SET_MENU_OPEN_STATE,
    payload: state,
    meta: {
      feature: UI
    }
  };
};
