const _ = require('lodash');
const { authorization } = require('./../../utils/google-authorization');
const { getShortUrl } = require('./../../utils/url-shortner');
const { getSheetData, formatData } = require('../../utils/spreadshit-data-fetcher');
const { topics } = require('../../dataConfig');

const getTopics = async (req, res) => {
  const { group: userGroup, role: userRole } = req.auth;
  const topicsToReturn = _.keys(topics).reduce((acc, topicId) => {
    const topic = _.get(topics, topicId);
    const { title, onlyOwnLeader = false } = topic;
    const preFilledLinkObj = _.get(topic, 'preFilledLink');
    let preFilledLink = null;
    if (
      (topic.roles && !topic.roles.includes(userRole)) ||
      (topic.excludeRoles && topic.excludeRoles.includes(userRole))
    ) {
      return acc;
    }
    if (topic.group && !topic.groups.includes(userGroup)) {
      return acc;
    }
    if (preFilledLinkObj && preFilledLinkObj.roles.includes(userRole)) {
      preFilledLink = preFilledLinkObj.url;
    }
    acc.push({ id: topicId, title, preFilledLink, onlyOwnLeader });
    return acc;
  }, []);

  res.json(topicsToReturn);
};

const getTopicData = async (req, res) => {
  const { group: userGroup, role: userRole } = req.auth;
  const { identifiers } = req.query;
  const { topicId } = req.params;

  try {
    const auth = await authorization();
    const topic = topics[topicId];
    const [sheetData, originalTitles] = await getSheetData({ topic, auth, identifiers });
    let data = formatData({ topic, sheetData, userGroup, userRole, originalTitles });

    if (topic.extend) {
      for (const eTopic of topic.extend) {
        const [extendSheetData, extendedOriginalTitles] = await getSheetData({ topic: eTopic, auth, identifiers });

        const extendData = formatData({
          topic: eTopic,
          sheetData: extendSheetData,
          userGroup,
          userRole,
          originalTitles: extendedOriginalTitles,
        });

        data = [...data, ...extendData];
      }
    }

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getPreFilledLinkShortUrl = async (req, res) => {
  const { url } = req.query;
  const { topicId } = req.params;
  const topic = topics[topicId];
  const shouldShortUrl = _.get(topic, 'preFilledLink.enableShortUrl');
  try {
    let data = { url, shortUrl: url };
    if (shouldShortUrl) {
      const { url: shortUrl } = await getShortUrl(url);
      data = { url, shortUrl };
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getTopics,
  getTopicData,
  getPreFilledLinkShortUrl,
};
