/**
 * Created by stefandorresteijn on 11/05/2017.
 */

// region imports
import {
    GraphQLList,
} from 'graphql'

import {
    resolver,
    defaultListArgs,
} from 'graphql-sequelize'

import userSchema from './userSchema'
import userModel from './userModel'
// endregion

/**
 * Here our query for GraphQL comes together.
 * We define the type as a list of coinSchemas
 * We automatically generate the arguments we can use through sequelize-graphql
 * We use the resolver to automatically resolve using our coinModel
 */
export default {
    users: {
        type: new GraphQLList(userSchema),
        args: defaultListArgs(),
        resolve: resolver(userModel),
    },
}
