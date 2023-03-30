const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email:{
    type: String,
    trim : true,
    require: true,
    unique : true,
  },
  password:{
    type: String,
    require : true,
    trim: true
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  url:{
    type: String,
    default: 'http://localhost:8000/images/avatar.jpg'
  }
});

module.exports = mongoose.model('user', userSchema)