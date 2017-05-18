import { GraphQLObjectType } from 'graphql'
import coin from './models/coin/coinQuery'

/**
 * Our rootFields simply pulls all our queries together into one object
 * @type {*}
 */
const rootFields = Object.assign({},
    coin,
)

/**
 * This created the RootQuery with the rootFields object for its fields
 */
export default new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => rootFields,
})
