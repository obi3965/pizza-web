const express = require('express')

const {home,all, contact } = require('../controllers/indexController.js')

const router = express.Router()

router.get('/', home)
router.get('/all-flavours', all)

router.get('/contact', contact)



module.exports = router