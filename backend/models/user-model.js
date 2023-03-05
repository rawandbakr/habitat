const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      role: { type: String,
        required: true,
        default: 'user',
      },
      profilePhoto:{
        type:String,
        required: false,
      }
    });

module.exports =mongoose.model('user',userSchema);
