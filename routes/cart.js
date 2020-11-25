const express = require('express')

const { addProduct,checkout, updateCart, clearCart } = require('../controllers/cartController.js')

const router = express.Router()

// router.get('/', home)
router.get('/add/:pizza', addProduct)
router.get('/checkout', checkout)
router.get('/update/:pizza', updateCart)
router.get('/clear', clearCart)
// router.get('/:slug', getSingle)

module.exports = router