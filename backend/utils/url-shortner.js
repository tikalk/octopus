const { BitlyClient } = require('bitly');
const apiSecret = process.env.BITLY_ACCESS_TOKEN;
const bitly = new BitlyClient(apiSecret, {});

const getShortUrl = url => bitly.shorten(url);

module.exports = {
  getShortUrl
};
