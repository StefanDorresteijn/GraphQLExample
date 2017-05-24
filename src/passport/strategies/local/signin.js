import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bCrypt from 'bcrypt-nodejs'
import User from '../../../schemas/models/user/userModel'

// LOCAL SIGNIN
passport.use('local-signin', new LocalStrategy(

    {

        // by default, local strategy uses username and password, we will override with email

        usernameField: 'email',

        passwordField: 'password',

        passReqToCallback: true, // allows us to pass back the entire request to the callback

    },


    (req, email, password, done) => {
        const isValidPassword = function checkPassword(userpass, unencryptedPassword) {
            return bCrypt.compareSync(unencryptedPassword, userpass)
        }

        User.findOne({
            where: {
                email,
            },
        }).then((user) => {
            if (!user) {
                return done(null, false, {
                    message: 'Email does not exist',
                })
            }

            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.',
                })
            }


            const userinfo = user.get()
            return done(null, userinfo)
        }).catch((err) => {
            console.log('Error:', err)

            return done(null, false, {
                message: 'Something went wrong with your Signin',
            })
        })
    },

))
