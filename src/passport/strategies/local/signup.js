/**
 * Created by stefandorresteijn on 24/05/2017.
 */
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bCrypt from 'bcrypt-nodejs'
import User from '../../../schemas/models/user/userModel'

passport.use('local-signup', new LocalStrategy(

    {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true, // allows us to pass back the entire request to the callback

    },

    (req, email, password, done) => {
        const generateHash = unencryptedPassword => bCrypt.hashSync(unencryptedPassword, bCrypt.genSaltSync(8), null)
        User.findOne({
            where: {
                email,
            },
        }).then((user) => {
            if (user) {
                return done(null, false, {
                    message: 'This email is already in use',
                })
            }
            const encryptedPassword = generateHash(password)
            const data = {
                email,
                password: encryptedPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
            }
            User.create(data).then((newUser) => {
                if (!newUser) {
                    return done(null, false)
                }
                return done(null, newUser)
            })
        })
    },

))

// serialize
passport.serializeUser((user, done) => {
    done(null, user.id)
})

// deserialize user
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        if (user) {
            done(null, user.get())
        } else {
            done(user.errors, null)
        }
    })
})
