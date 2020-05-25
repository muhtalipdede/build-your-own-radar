import * as mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  name: String,
  ring: String,
  quadrant: String,
  isNew: Boolean,
  description: String,
});

export default mongoose.model('item', ItemSchema);