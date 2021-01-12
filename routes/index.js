const express = require('express')

const {home,all } = require('../controllers/indexController.js')

const router = express.Router()

router.get('/', home)
router.get('/all-flavours', all)





module.exports = router