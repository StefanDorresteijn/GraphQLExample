import Sequelize from 'sequelize'
import db from '../../../db/db'

/** Here we define our model */
const userModel = db.define('user', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },

    firstName: {
        type: Sequelize.STRING,
        notEmpty: true,
    },

    lastName: {
        type: Sequelize.STRING,
        notEmpty: true,
    },

    username: {
        type: Sequelize.TEXT,
    },

    about: {
        type: Sequelize.TEXT,
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        },
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    last_login: {
        type: Sequelize.DATE,
    },

    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active',
    },
})

export default userModel
