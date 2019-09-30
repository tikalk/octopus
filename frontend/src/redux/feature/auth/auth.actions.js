import * as AT from './../../actionTypes';

const { AUTH } = AT;

export const userLogOut = () => {
  return {
    type: AT.LOGOUT_USER,
    meta: {
      feature: AUTH
    }
  };
};
