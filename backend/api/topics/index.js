const { Router } = require('express');
const validate = require('../../common/validator');

const schema = require('./topics.joi.schema');
const { getTopics, getTopicData, getPreFilledLinkShortUrl } = require('./topics.controller');
const router = new Router();

router.route('/preFilledLinkShortUrl/:topicId').get(validate(schema.getPreFilledLinkShortUrl), getPreFilledLinkShortUrl);
router.route('/').get(validate(schema.getTopics), getTopics);
router.route('/:topicId').get(validate(schema.getTopicData), getTopicData);

module.exports = router;
