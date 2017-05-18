import { GraphQLSchema } from 'graphql'
import query from './RootQuery'

/**
 * The rootSchema simply creates a new GraphQLSchema using the rootQuery we defined in the RootQuery.js file
 */
export default new GraphQLSchema({ query })
