import { Sequelize } from 'sequelize'

/**
 * We simply export the DB connection here. We'll use this to perform actions on the DB later.
 */
export default new Sequelize('postgres://pgadmin:pgadmin@localhost:5432/graphql')
