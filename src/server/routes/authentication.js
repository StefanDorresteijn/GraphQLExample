/**
 * Created by stefandorresteijn on 26/05/2017.
 */
import jwt from 'jsonwebtoken'
import passport from 'passport'
import jwtOptions from '../../config/jwt'

export default function (app) {
    /**
     * This is the signup route, using passportJS
     */
    app.post('/signup', (req, res, next) => {
        passport.authenticate('local-signup', (err, user, info) => {
            if (err) {
                return next(err)
            }
            if (!user && info) {
                return res.send({
                    success: false,
                    message: info.message,
                })
            }
            return res.send({
                success: true,
                user,
            })
        })(req, res, next)
    })

    /**
     * This is the login route.
     * We use this to authenticate the user and generate a token
     */
    app.post('/login', (req, res, next) => {
        passport.authenticate('local-signin', (err, user, info) => {
            if (err) {
                return next(err)
            }
            if (!user && info) {
                return res.send({
                    success: false,
                    message: info.message,
                })
            }
            // Create JWT token
            const payload = {
                id: user.id,
            }
            const token = jwt.sign(payload, jwtOptions.secretOrKey)
            res.json({
                success: true,
                token,
            })
        })(req, res, next)
    })
}
