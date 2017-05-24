/**
 * Created by stefandorresteijn on 10/05/2017.
 */
// region imports
import express from 'express'
import graphqlHTTP from 'express-graphql'
import passport from 'passport'
import bodyParser from 'body-parser'
import session from 'express-session'
import uuid from 'node-uuid'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import RootSchema from './schemas/RootSchema'
import db from './db/db'
import jwtOptions from './config/jwt'
import './passport/strategies'
import User from './schemas/models/user/userModel'
// endregion

/**
 * We're running on express
 */
const app = express()


// passport's session piggy-backs on express-session
app.use(session({
    genid(req) {
        return uuid.v4()
    },
    secret: 'Z3]GJW!?9uP”/Kpe',
}))
app.use(passport.initialize())
app.use(passport.session())

/**
 * This is the login route, using passportJS
 */
app.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
app.use(/\/((?!graphql).)*/, bodyParser.json());
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


 app.use('/graphql', expressJwt({
     secret: jwtOptions.secretOrKey,
     credentialsRequired: false,
 }))

 app.use('/graphql', (req, res, done) => {
     if (!req.user) {
         return done()
     }
     return User.findOne({ where: { id: req.user.id } }).then((user) => {
         req.context = {
             user,
         }
         done()
     })
 })

/**
 * Here we define our GraphQL route and pass it the rootschema
 */
 app.use('/graphql', graphqlHTTP(req => ({
     schema: RootSchema,
     context: req.context,
     graphiql: true,
 }),
 ))

app.use('/graphql', graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
}),
)


/**
 * We start the server, authenticate the DB and console.log to let ourselves know it's all good
 */
app.listen(3000, () => {
    console.log('Listening on port 3000. Have fun!')
    db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
            db.sync()
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err)
        })
})
