const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = Product.find();
  res.render('shop/index', { title: 'Shoping Cart', products: products });
});

module.exports = router;
