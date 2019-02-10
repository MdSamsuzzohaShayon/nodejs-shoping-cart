const express = require('express');
const router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs)=>{
    let productChunks = [];
    //IN A ROW IN TEMPLATE ENGIN WE WILL RENDER THREE PRODUCT
    // REST OF THEM WILL GO THO ANOTHER ROW
    chunkSize = 3;
    for(let i = 0; i<docs.length ; i+= chunkSize){
      // For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
      // know more about slice methods
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'Shoping Cart', products: productChunks });
  });
});

module.exports = router;
