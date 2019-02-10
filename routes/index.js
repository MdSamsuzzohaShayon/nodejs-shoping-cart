const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');

//IT REQUIRE SESSION TO BE ENABLED
const csrfProtection = csrf();
router.use(csrfProtection); // ALL THE ROUTE WITH ROUTER SHOULD BE PROTECTED WITH CSRF PROTECTION

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs)=>{
    let productChunks = [];
    //IN A ROW IN TEMPLATE ENGIN WE WILL RENDER THREE PRODUCT
    // REST OF THEM WILL GO THO ANOTHER ROW
    chunkSize = 3;
    //THIS FOR LOOP WILL OUTPUT 3 BY 3 TO ALL FROM DB
    for(let i = 0; i<docs.length ; i+= chunkSize){
      // For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
      // know more about slice methods
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
      productChunks.push(docs.slice(i, i+chunkSize));
    }
    res.render('shop/index', { title: 'Shoping Cart', products: productChunks });
  });
});

router.get('/user/signup', (req, res, next)=>{
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', (req, res, next)=>{
  res.redirect('/');
})

module.exports = router;
