const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PollSchema = new schema({
  pollName: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true,
  },
  beers: [{
    name: {
      type: String,
      required: true
    },
    country: {
      type: String,

    },
    brewery: {
      type: String,
      required: true,
      trim: true
    },
    style: {
      type: String,
    },
    strength: Number,
    votes: {
      type: Number,
      required: true
    }
  }]
})
const Poll = mongoose.model('Poll', PollSchema );

module.exports = Poll;
