/**
 * Created by stefandorresteijn on 10/05/2017.
 */
// region imports
import express from 'express'
import db from '../db/db'
import setupExpress from './setupExpress'
import setupRoutes from './routes'
// endregion

/**
 * We're running on express
 */
const app = express()

/**
 * Here we setup express, using the setupExpress file
 */
setupExpress(app)

/**
 * Here we setup the routes we defined in the routes.js file
 */
setupRoutes(app)

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
