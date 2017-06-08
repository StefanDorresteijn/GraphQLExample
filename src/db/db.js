import { Sequelize } from 'sequelize'

/**
 * We simply export the DB connection here. We'll use this to perform actions on the DB later.
 */
export default new Sequelize(process.env.DB_URL)
