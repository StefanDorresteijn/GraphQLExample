/**
 * Created by stefandorresteijn on 10/05/2017.
 */
import express from 'express'
import graphqlHTTP from 'express-graphql'
import RootSchema from './schemas/RootSchema'
import db from './db/db'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
}))

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
