import { GraphQLObjectType } from 'graphql'
import coin from './models/coin/coinQuery'

const rootFields = Object.assign({},
    coin,
)

export default new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => rootFields,
})
