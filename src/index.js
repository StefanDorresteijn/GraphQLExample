/**
 * Created by stefandorresteijn on 10/05/2017.
 */
//region imports
import express from 'express'
import graphqlHTTP from 'express-graphql'
import RootSchema from './schemas/RootSchema'
import db from './db/db'
// endregion

/**
 * We're running on express
 */
const app = express()

/**
 * Here we define our GraphQL route and pass it the rootschema
 */
app.use('/graphql', graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
}))

/**
 * We start the server, authenticate the DB and console.log to let ourselves know it's all good
 */
app.listen(4000, () => {
    console.log('Listening on port 4000. Have fun!')
    db
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        })
})
