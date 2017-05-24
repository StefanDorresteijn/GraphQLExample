/**
 * Created by stefandorresteijn on 19/05/2017.
 */
import {
    GraphQLNonNull,
    GraphQLString
} from 'graphql'
import userSchema from './userSchema'


export default {
    login: {
        type: userSchema,
        description: 'Login functionality for users',
        args: {
            username: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Username',
            },
            password: {
                type: new GraphQLNonNull(GraphQLString),
                description: 'Password',
            },
        },
        resolve: {
            // Login
        },
    },
}
