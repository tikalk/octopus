export const apiError = ({ error, feature, sourceAction, meta }) => ({
  type: sourceAction.ERROR,
  payload: { error },
  meta
});

export const apiSuccess = ({ res: { data }, feature, sourceAction, meta }) => ({
  type: sourceAction.SUCCESS,
  payload: { data },
  meta
});
