const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({

  title:  {
    type: String, 
    required: [true, "Field can not be empty"],
    unique: true 
  },
  author: { 
    type: String, 
    required: [true, "Field can not be empty"],
  }, 
  desc:   { 
    type: String, 
    required: [true, "Field can not be empty"],
  },
  image:  { 
    type: String, 
    required: [true, "Field can not be empty"],
  },
  price:  { 
    type: Number, 
    required: [true, "Field can not be empty"],
  }

}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema);