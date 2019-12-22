const Event = require('../models/event');
const Content = require('../models/content');
const util = require('util');

const resolvers = {
  Query: {
    event: async (root, {_id}) => {
      return await Event.findOne({_id});
    },
    events: async () => {
      return await Event.find();
    },
    content: async (root, {_id}) => {
      return await Content.findOne({_id});
    },
    contents: async () => {
      return await Content.find();
    }
  },
  Event: {
    contents: async({_id}) => {
      const event = await Event.findOne({_id});
      const contentIDs = event.contents.map((content) => content.id);
      return await Content.find({_id:{$in: contentIDs}});
    }
  },
  Mutation: {
    createEvent: async (root, args, context, info) => {
      const event = new Event(args);
      const ret = await event.save();
      return ret;
    },
    createContent: async (root, args, context, info) => {
      const content = new Content(args);
      const ret = await content.save();
      return ret;
    },
  },
}

module.exports = {
  resolvers
}
