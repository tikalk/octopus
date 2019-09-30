import * as AT from './../../actionTypes';
import { getTopicData, setLoadTopicsError, setSelectedTopic, setTopicData, setTopics } from './topics.actions';
import { setLoader } from '../loaders/loaders.actions';
import createMiddleware from './../../middleware.helper';

const { TOPICS } = AT;

const topicsMiddleware = async ({ action, dispatch, getState }) => {
  const { type, payload } = action;
  switch (type) {
    case AT.TOPIC_SELECTED:
      {
        const { employee, topic } = action.payload;
        const { identifiers } = employee;
        const { id: topicId } = topic;
        let arr = [setSelectedTopic(topic)];
        if (identifiers) {
          arr = [...arr, setLoader({ name: 'topic', state: true }), getTopicData({ topicId, identifiers })];
        }
        dispatch(arr);
      }
      break;

    case AT.REFRESH_TOPIC_CLICKED:
      {
        const {
          employees: {
            selectedEmployee: { identifiers }
          },
          topics: {
            selectedTopic: { id: topicId }
          }
        } = getState();
        const force = true;

        dispatch([setLoader({ name: 'topic', state: true }), getTopicData({ topicId, identifiers, force })]);
      }
      break;

    case AT.GET_TOPICS.SUCCESS:
      {
        const { data } = action.payload;
        dispatch(setTopics(data));
      }
      break;

    case AT.GET_TOPICS.ERROR:
      {
        dispatch([setLoadTopicsError(true)]);
      }
      break;

    case AT.GET_TOPIC_DATA.SUCCESS:
      {
        const { data } = action.payload;
        dispatch([setTopicData(data), setLoader({ name: 'topic', state: false })]);
      }
      break;

    case AT.GET_TOPIC_DATA.ERROR:
      {
        dispatch([setLoader({ name: 'topic', state: false })]);
      }
      break;
  }
};

export default createMiddleware({
  feature: TOPICS
})(topicsMiddleware);
