/**
 * Created by stefandorresteijn on 10/05/2017.
 */
import express from 'express'
import graphqlHTTP from 'express-graphql'
import RootSchema from './schemas/RootSchema'

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
}))

app.listen(4000, () => {
    console.log('Listening on port 4000. Have fun!')
})
