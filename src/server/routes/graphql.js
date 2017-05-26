/**
 * Created by stefandorresteijn on 26/05/2017.
 */
import graphqlHTTP from 'express-graphql'
import expressJwt from 'express-jwt'

import RootSchema from '../../schemas/RootSchema'
import User from '../../schemas/models/user/userModel'
import jwtOptions from '../../config/jwt'

export default function (app) {
    /**
     * This is where we configure JWT for GraphQL
     */
    app.use('/graphql', expressJwt({
        secret: jwtOptions.secretOrKey,
        credentialsRequired: false,
    }))

    /**
     * This is where we authenticate the user and put his object in the context
     */
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
    })))
}
