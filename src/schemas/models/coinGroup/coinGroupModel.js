/**
 * Created by stefandorresteijn on 18/05/2017.
 */

import Sequelize from 'sequelize'
import db from '../../../db/db'
import coinModel from '../coin/coinModel'

/** Here we define our model */
const coinGroupModel = db.define('coinGroup', {
    name: Sequelize.STRING,
})

/**
 * This is how we build relationships in sequelize. One group has many coins.
 */
coinGroupModel.Coins = coinGroupModel.hasMany(coinModel, { as: 'coins' })

export default coinGroupModel
