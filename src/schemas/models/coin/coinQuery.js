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

import coinSchema from './coinSchema'
import coinModel from './coinModel'
// endregion

/**
 * Here our query for GraphQL comes together.
 * We define the type as a list of coinSchemas
 * We automatically generate the arguments we can use through sequelize-graphql
 * We use the resolver to automatically resolve using our coinModel
 */
export default {
    coins: {
        type: new GraphQLList(coinSchema),
        args: defaultListArgs(),
        resolve: resolver(coinModel),
    },
}
