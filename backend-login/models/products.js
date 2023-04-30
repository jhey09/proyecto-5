const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  
}, {
  versionKey: false,
  timestamps: true
})

const productModel = model('productos', productSchema);

module.exports = productModel