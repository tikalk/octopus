import { get } from 'lodash';
import * as AT from '../../actionTypes';

const { UI } = AT;

const _isSmallScreen = width => width < 1200;

const INIT_STATE = {
  width: window.innerWidth,
  height: window.innerHeight,
  isSmallScreen: _isSmallScreen(window.innerWidth),
  menuOpen: true
};

const uiReducer = (state = INIT_STATE, action) => {
  const { type, payload, meta } = action;
  const feature = get(meta, 'feature');

  if (feature !== UI) {
    return state;
  }

  switch (type) {
    case AT.SET_WINDOW_SIZE:
      return {
        ...state,
        width: payload.width,
        height: payload.height,
        isSmallScreen: _isSmallScreen(payload.width)
      };

    case AT.SET_MENU_OPEN_STATE:
      return {
        ...state,
        menuOpen: payload
      };
    default:
      return state;
  }
};

export default uiReducer;
