/**
 * Created by stefandorresteijn on 11/05/2017.
 */

import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize'
import coinModel from './coinModel'

const coinSchema = new GraphQLObjectType({
    name: 'coin',
    fields: attributeFields(coinModel),
})

export default coinSchema
