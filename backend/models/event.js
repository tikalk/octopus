const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  when: Date,
  where: String,
  organizers: Array,
  contents: Array,
  attendees: Array
})

module.exports = mongoose.model('Event', eventSchema);
