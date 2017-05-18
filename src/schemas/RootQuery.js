import { GraphQLObjectType } from 'graphql'
import coin from './models/coin/coinQuery'
import coinGroup from './models/coinGroup/coinGroupQuery'

/**
 * Our rootFields simply pulls all our queries together into one object
 * @type {*}
 */
const rootFields = Object.assign({},
    coin,
    coinGroup,
)

/**
 * This created the RootQuery with the rootFields object for its fields
 */
export default new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => rootFields,
})
