import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import { StatusCodeHandlerPlugin } from './plugins/StatusCodeHandlerPlugin';

export function createApolloServer() {
  const schema = makeExecutableSchema({ typeDefs, resolvers })

  const apollo = new ApolloServer({
    schema,
    formatError: err => {
      return new Error(err.message)
    },
    plugins: [StatusCodeHandlerPlugin]
  })

  return apollo
}
