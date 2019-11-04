import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
