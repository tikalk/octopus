import { replace } from 'lodash';
import { push } from 'connected-react-router';
import * as AT from './../../actionTypes';
import {
  getTopicData,
  setLoadTopicsError,
  setSelectedTopic,
  setTopicData,
  setTopics,
  setPreFilledFormURL,
  setFormDialogState,
  getShortURL
} from './topics.actions';
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
        const { data } = payload;
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
        const { data } = payload;
        dispatch([setTopicData(data), setLoader({ name: 'topic', state: false })]);
      }
      break;

    case AT.GET_TOPIC_DATA.ERROR:
      {
        dispatch([setLoader({ name: 'topic', state: false })]);
      }
      break;

    case AT.PRE_FILLED_FORM_CLICKED:
      {
        const { employee, topic } = payload;
        const {
          employees: { me }
        } = getState();
        let { preFilledLink, id: topicId } = topic;
        if (preFilledLink) {
          const { name, group, leader } = employee;
          preFilledLink = replace(preFilledLink, '{{name}}', name || '');
          preFilledLink = replace(preFilledLink, '{{group}}', group || '');
          preFilledLink = replace(preFilledLink, '{{leader}}', leader || '');
          preFilledLink = replace(preFilledLink, '{{me}}', me.name || '');
          dispatch([
            setPreFilledFormURL(preFilledLink),
            setFormDialogState(true),
            getShortURL({ url: preFilledLink, topicId })
          ]);
        }
      }
      break;

    case AT.GET_SHORT_URL.SUCCESS:
      {
        const {
          data: { url, shortUrl }
        } = payload;
        dispatch(setPreFilledFormURL({ url, shortUrl }));
      }
      break;
  }
};

export default createMiddleware({
  feature: TOPICS
})(topicsMiddleware);
