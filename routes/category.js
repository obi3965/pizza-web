const express = require('express')
const {create } = require('../controllers/categoryController.js')


const router = express.Router()


 router.post('/category', create)
 


module.exports = router