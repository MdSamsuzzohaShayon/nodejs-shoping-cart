const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

//IT REQUIRE SESSION TO BE ENABLED
const csrfProtection = csrf();
router.use(csrfProtection); // ALL THE ROUTE WITH ROUTER SHOULD BE PROTECTED WITH CSRF PROTECTION







//SIGNUP
router.get('/signup', (req, res, next) => {
    // FLASH MESSAGE WILL BE STORE UNDER error
    let messages = req.flash("error");
    res.render('user/signup', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    });
});
// REQUESTING FOR SIGNUP
//LOCAL.SHIGNUP THIS IS INDICATING THE STRATEGY WE MADE IN PASSPORT.JS FILE
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));









// SHOW THE DASHBOARD OR USER PROFILE
router.get('/profile', (req, res, next) => {
    res.render('user/profile');
});











//SIGN IN
router.get('/signin', (req, res, next) => {
    // FLASH MESSAGE WILL BE STORE UNDER error
    let messages = req.flash("error");
    res.render('user/signin', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    });
});
router.post('/signin', passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
}));


module.exports = router;