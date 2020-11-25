
const Product = require('../models/product')
const Category = require('../models/category')


exports.create = (req,res) =>{
    const product = new Product(req.body)
    const products = product.save()
    res.status(200).json({
        products
    })
}

exports.getByCategory = (req,res) =>{
    const categorySlug = req.params.category;

    Category.findOne({slug: categorySlug}, function (err, c) {
        Product.find({category: categorySlug}, function (err, pizzas) {
            if (err)
                console.log(err);

            res.render('cat_pizza', {
                title: c.title,
                pizzas: pizzas
            });
        });
    });
}


exports.getByDetail = (req,res)=>{
     
    Product.findOne({slug: req.params.flavours}, function (err, flavours) {
        if (err)
            console.log(err);

        res.render('details', {
          
            title: 'details',
            pizza: flavours,
            price:flavours.price,
            desc:flavours.desc
        });
    });

}