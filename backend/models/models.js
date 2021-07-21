'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
  albumId: {
    type: Number
  },
  id: {
    type: Number
  },
  title: {
    type: String
  },
  url: {
    type: String
  },
  thumbnailUrl: {
    type: String
  }
});

var UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  password: {
    type: String
  },
  isVerified: {
    type: Boolean
  },
  isActive: {
    type: Boolean
  }
});

module.exports = mongoose.model('Products', ProductSchema);
module.exports = mongoose.model('Users', UserSchema);
