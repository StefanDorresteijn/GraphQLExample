/**
 * Created by stefandorresteijn on 18/05/2017.
 */

import Sequelize from 'sequelize'
import db from '../../../db/db'

/** Here we define our model */
const coinModel = db.define('coin', {
    name: Sequelize.STRING,
    symbol: Sequelize.STRING,
    rank: Sequelize.FLOAT,
    price_usd: Sequelize.FLOAT,
})

export default coinModel
