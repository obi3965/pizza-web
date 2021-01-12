const express = require('express')
const { create, getByCategory, getByDetail } = require('../controllers/projectController.js')

const router = express.Router()



 router.post('/create', create)
 router.get('/:category', getByCategory)
 router.get('/:category/:flavours', getByDetail)
  
module.exports = router


