import * as AT from './../../actionTypes';

const { TOPICS } = AT;

export const getTopics = ({ force }) => {
  return {
    type: `${TOPICS} ${AT.GET_TOPICS.API_REQUEST}`,
    payload: {},
    meta: {
      feature: TOPICS,
      sourceAction: AT.GET_TOPICS,
      url: 'api/topics',
      method: 'GET',
      force,
    },
  };
};

export const setTopics = (topics) => {
  return {
    type: `${TOPICS} ${AT.SET_TOPICS}`,
    payload: topics,
  };
};

export const getTopicData = ({ topicId, identifiers, force }) => {
  return {
    type: `${TOPICS} ${AT.GET_TOPIC_DATA.API_REQUEST}`,
    payload: { identifiers },
    meta: {
      feature: TOPICS,
      sourceAction: AT.GET_TOPIC_DATA,
      url: `api/topics/${topicId}`,
      method: 'GET',
      force,
    },
  };
};

export const setTopicData = (data) => {
  return {
    type: `${TOPICS} ${AT.SET_TOPIC_DATA}`,
    payload: data,
  };
};

export const setLoadDataError = (state) => {
  return {
    type: `${TOPICS} ${AT.SET_LOAD_TOPIC_DATA_ERROR}`,
    payload: state,
  };
};

export const setSelectedTopic = (topic) => {
  return {
    type: `${TOPICS} ${AT.SET_SELECTED_TOPIC}`,
    payload: topic,
  };
};

export const setLoadTopicsError = (state) => {
  return {
    type: `${TOPICS} ${AT.SET_LOAD_TOPICS_ERROR}`,
    payload: state,
  };
};

export const topicSelected = ({ topic, employee }) => {
  return {
    type: `${TOPICS} ${AT.TOPIC_SELECTED}`,
    payload: { topic, employee },
  };
};

export const refreshTopicClick = () => {
  return {
    type: `${TOPICS} ${AT.REFRESH_TOPIC_CLICKED}`,
    payload: {},
  };
};


