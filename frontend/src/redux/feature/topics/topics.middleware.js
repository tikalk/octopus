import { replace } from 'react-router-redux';
import store from 'store';
import * as AT from './../../actionTypes';
import {
  getTopicData,
  setLoadTopicsError,
  setSelectedTopic,
  setTopicData,
  setTopics,
} from './topics.actions';
import { setLoader } from '../loaders/loaders.actions';

const { TOPICS } = AT;

const { AUTH } = AT;
export const topicsMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  switch (true) {

    case action.type.includes(`${TOPICS} ${AT.TOPIC_SELECTED}`): {
      const { employee, topic } = action.payload;
      const { identifiers } = employee;
      const { id: topicId } = topic;
      let arr = [setSelectedTopic(topic)];
      if (identifiers) {
        arr = [...arr,
          setLoader({ name: 'topic', state: true }),
          getTopicData({ topicId, identifiers }),
        ];
      }
      dispatch(arr);
    }
      break;
    case action.type.includes(`${TOPICS} ${AT.GET_TOPICS.SUCCESS}`): {
      const { data } = action.payload;
      dispatch(setTopics(data));
    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPICS.ERROR}`): {
      dispatch([
        setLoadTopicsError(true),
      ]);
    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPIC_DATA.SUCCESS}`): {
      const { data } = action.payload;
      dispatch([
        setTopicData(data),
        setLoader({ name: 'topic', state: false }),
      ]);
    }
      break;

    case action.type.includes(`${TOPICS} ${AT.GET_TOPIC_DATA.ERROR}`): {
      dispatch([
        setLoader({ name: 'topic', state: false }),
      ]);
    }
      break;

  }
};