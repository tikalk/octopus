import * as AT from '../../actionTypes';

const { UI } = AT;

export const windowIsBeingResized = ({ width, height }) => {
  return {
    type: AT.WINDOW_IS_BEING_RESIZED,
    payload: { width, height },
    meta: {
      feature: UI
    }
  };
};

export const setWindowSize = ({ width, height }) => {
  return {
    type: AT.SET_WINDOW_SIZE,
    payload: { width, height },
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
