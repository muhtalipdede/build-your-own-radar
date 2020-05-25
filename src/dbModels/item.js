const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  ring: String,
  quadrant: String,
  // isNew: Boolean,
  description: String,
});

module.exports = mongoose.model('item', ItemSchema);