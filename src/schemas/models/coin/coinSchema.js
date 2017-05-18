/**
 * Created by stefandorresteijn on 11/05/2017.
 */

// region imports
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize'
import coinModel from './coinModel'
// endregion

/**
 * Our coinSchema defines our schema for GraphQL
 * The attributeFields method uses the coinModel we created to create a graphQL schema for us
 * */
const coinSchema = new GraphQLObjectType({
    name: 'coin',
    fields: attributeFields(coinModel),
})

export default coinSchema
