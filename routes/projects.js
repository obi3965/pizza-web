const express = require('express')
const {getAll, create, getByCategory, getByDetail } = require('../controllers/projectController.js')

const router = express.Router()

//  router.get('/all', getAll)

 router.post('/create', create)
 router.get('/:category', getByCategory)
 router.get('/:category/:flavours', getByDetail)
  
module.exports = router


