
const Category = require('../models/category')

exports.create = (req,res) =>{
    const cat = new Category(
        req.body
    )
    const cats = cat.save()
    res.status(200).json({
        cats:cats
    })
}