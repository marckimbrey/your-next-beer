const mongoose = require('mongoose');
const schema = mongoose.schema;

const Beer = new schema({
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

const Beer = mongoose.model('Beer', BeerSchema);

module.exports = Beer;
