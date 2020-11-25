var mongoose = require('mongoose');

// Category Schema
var CategorySchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    text:{
        type:String
    },
    catImage:{
      type:String
    }
}, { timestamps:true });

 module.exports = mongoose.model('Category', CategorySchema);