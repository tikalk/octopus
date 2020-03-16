const Joi = require('joi');

const getTopics = {
  params: {},
  query: {},
  body: {}
};

const getTopicData = {
  params: {
    topicId: Joi.string().required()
  },
  query: {
    identifiers: Joi.array().required()
  }
};

const getPreFilledLinkShortUrl = {
  params: {
    topicId: Joi.string().required()
  },
  query: {
    url: Joi.string().required()
  }
};

module.exports = {
  getTopics,
  getTopicData,
  getPreFilledLinkShortUrl
};
