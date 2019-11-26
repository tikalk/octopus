import { get } from 'lodash';
import * as AT from './../../actionTypes';

const { TOPICS } = AT;

export const INIT_STATE = {
  topics: [],
  loadTopicsError: false,
  loadTopicsDataError: false,
  selectedTopic: {},
  topicData: '',
  preFilledFormURL: '',
  preFilledFormShortURL: '',
  formDialogOpen: false
};

export default (state = INIT_STATE, action) => {
  const { type, payload, meta } = action;
  const feature = get(meta, 'feature');
  if (feature !== TOPICS) {
    return state;
  }
  switch (type) {
    case AT.SET_TOPICS:
      return { ...state, topics: payload, loadTopicsError: false };

    case AT.SET_SELECTED_TOPIC:
      return { ...state, selectedTopic: payload };

    case AT.SET_LOAD_TOPICS_ERROR:
      return { ...state, loadTopicsDataError: true };

    case AT.SET_LOAD_TOPIC_DATA_ERROR:
      return { ...state, loadTopicsDataError: true };

    case AT.SET_TOPIC_DATA:
      return { ...state, topicData: payload };

    case AT.SET_PRE_FILLED_FORM_URL:
      return { ...state, preFilledFormURL: payload.url, preFilledFormShortURL: payload.shortUrl };

    case AT.SET_FORM_DIALOG_STATE:
      return { ...state, formDialogOpen: payload };

    default:
      return state;
  }
};
