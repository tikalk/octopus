import * as AT from './../../actionTypes';

const { TOPICS } = AT;

export const getTopics = ({ force }) => {
  return {
    type: AT.GET_TOPICS.API_REQUEST,
    payload: {},
    meta: {
      feature: TOPICS,
      sourceAction: AT.GET_TOPICS,
      url: 'api/topics',
      method: 'GET',
      force
    }
  };
};

export const setTopics = topics => {
  return {
    type: AT.SET_TOPICS,
    payload: topics,
    meta: {
      feature: TOPICS
    }
  };
};

export const getTopicData = ({ topicId, identifiers, force }) => {
  return {
    type: AT.GET_TOPIC_DATA.API_REQUEST,
    payload: { identifiers },
    meta: {
      feature: TOPICS,
      sourceAction: AT.GET_TOPIC_DATA,
      url: `api/topics/${topicId}`,
      method: 'GET',
      force
    }
  };
};

export const setTopicData = data => {
  return {
    type: AT.SET_TOPIC_DATA,
    payload: data,
    meta: {
      feature: TOPICS
    }
  };
};

export const setLoadDataError = state => {
  return {
    type: AT.SET_LOAD_TOPIC_DATA_ERROR,
    payload: state,
    meta: {
      feature: TOPICS
    }
  };
};

export const setSelectedTopic = topic => {
  return {
    type: AT.SET_SELECTED_TOPIC,
    payload: topic,
    meta: {
      feature: TOPICS
    }
  };
};

export const setLoadTopicsError = state => {
  return {
    type: AT.SET_LOAD_TOPICS_ERROR,
    payload: state,
    meta: {
      feature: TOPICS
    }
  };
};

export const setPreFilledFormURL = ({ url, shortUrl }) => {
  return {
    type: AT.SET_PRE_FILLED_FORM_URL,
    payload: { url, shortUrl },
    meta: {
      feature: TOPICS
    }
  };
};

export const topicSelected = ({ topic, employee }) => {
  return {
    type: AT.TOPIC_SELECTED,
    payload: { topic, employee },
    meta: {
      feature: TOPICS
    }
  };
};

export const refreshTopicClick = () => {
  return {
    type: AT.REFRESH_TOPIC_CLICKED,
    payload: {},
    meta: {
      feature: TOPICS
    }
  };
};

export const preFilledFormClicked = ({ topic, employee }) => {
  return {
    type: AT.PRE_FILLED_FORM_CLICKED,
    payload: { topic, employee },
    meta: {
      feature: TOPICS
    }
  };
};

export const setFormDialogState = state => {
  return {
    type: AT.SET_FORM_DIALOG_STATE,
    payload: state,
    meta: {
      feature: TOPICS
    }
  };
};

export const getShortURL = ({ url }) => {
  return {
    type: AT.GET_SHORT_URL.API_REQUEST,
    payload: { url },
    meta: {
      feature: TOPICS,
      sourceAction: AT.GET_SHORT_URL,
      url: `api/topics/preFilledLinkShortUrl`,
      method: 'GET'
    }
  };
};
