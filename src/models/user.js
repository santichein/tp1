const mongoose = require("mongoose");

const userschema = mongoose.Schema({
  nombre: {
    type: String,
    required: true
    },
  dni: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  domicilio: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('user', userschema);