/**
 * Created by stefandorresteijn on 11/05/2017.
 */

// region imports
import { GraphQLObjectType, GraphQLList } from 'graphql'
import { attributeFields, resolver } from 'graphql-sequelize'
import _ from 'underscore'
import coinGroupModel from './coinGroupModel'
import coinSchema from '../coin/coinSchema'
// endregion

/**
 * Our coinGroupSchema defines our schema for GraphQL
 * The attributeFields method uses the coinGroupModel we created to create a graphQL schema for us
 * */
const coinGroupSchema = new GraphQLObjectType({
    name: 'coinGroup',
    fields: _.assign(attributeFields(coinGroupModel), {
        coins: {
            type: new GraphQLList(coinSchema),
            resolve: resolver(coinGroupModel.Coins),
        },
    }),
})

export default coinGroupSchema
