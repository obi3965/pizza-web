const Category = require('../models/category')
const Product = require('../models/product')
exports.home = (req,res) =>{
    Category.find({}, function(err, cats){
       res.render('home', {
          title:'home',
          c:cats.title,
          c:cats.text,
          c:cats.name,
          c:cats.catImage,
          page:'home',
        
        });  
    })
       
    
}

exports.all = (req,res) =>{
    Product.find(function(err, allPizzas){
        if(err)
            console.log(err)
         res.render('all-flavours',{
        title:'flavours',
        allPizzas:allPizzas,
        
    })
    })
   
}


  
