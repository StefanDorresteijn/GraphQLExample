/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import {
    GraphQLList,
} from 'graphql'

import {
    resolver,
    defaultListArgs,
} from 'graphql-sequelize'

import coinSchema from './coinSchema'
import coinModel from './coinModel'

export default {
    coins: {
        type: new GraphQLList(coinSchema),
        args: defaultListArgs(),
        resolve: resolver(coinModel),
    },
}
