//SETUP PASSPORT AND STRATEGY
const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

//THIS WILL TELL THE PASSPORT HOW TO STORE USER IN THE SESSION
passport.serializeUser((user, done) => {
    //STORE USER IN SESSION SERILIZE BY ID
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
});

passport.use('local.signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, email, password, done) => {
        User.findOne({
                'email': email
            },
            (err, user) => {
                if (err) {
                    return done(err);
                }
                if (user) {
                    return done(null, false, {
                        message: "Email is already in use"
                    });
                }
                let newUser = new User();
                newUser.email = email;
                newUser.password = password;
            }

        )
    }));