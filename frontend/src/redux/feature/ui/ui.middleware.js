import * as AT from './../../actionTypes';
import { setWindowWith } from './ui.actions';
import createMiddleware from './../../middleware.helper';

const { UI } = AT;

const uiMiddleware = async ({ action, dispatch, getState }) => {
  const { type, payload } = action;
  switch (type) {
    case AT.WINDOW_IS_BEING_RESIZED:
      {
        const { width } = payload;
        dispatch(setWindowWith({ width }));
      }
      break;
    default:
    // do nothing
  }
};

export default createMiddleware({
  feature: UI
})(uiMiddleware);
