const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    default: 3779, // стартове значення
  },
});

const Counter = mongoose.model('counter', counterSchema);

module.exports = Counter;