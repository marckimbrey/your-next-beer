const mongoose = require('mongoose');
const schema = mongoose.Schema;

const BeerSchema = new schema({
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
  strength: Number
});

const Beers = mongoose.model('Beer', BeerSchema);

module.exports = Beers;
