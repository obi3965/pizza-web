const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
   
    title: {
        type: String,
       
    },
    slug: {
        type: String
    },
    
    sale:{
      type:String,
      
    },
    discount:{
        type:Number,
        
    },
    category: {
        type: String,
       
    },
    price: {
        type: Number,
       
    },
    deletedPrice:{
        type: Number,
    },
    image: {
        type: String
    },
    
    
});

 module.exports = mongoose.model('Products', ProductSchema);