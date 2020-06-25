const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    isRequired: true,
  },
  email: {
    type: String,
    isRequired: true,
  },
  phone: {
    type: Number,
    isRequired: true,
  },
  age: {
    type: Number,
    isRequired: true,
  },
  password: {
    type: String,
    isRequired: true,
  },
})

module.exports = mongoose.model('User', userSchema)
