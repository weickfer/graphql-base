import express from 'express'
import { createApolloServer } from './graphql/apollo'

export async function bootstrap() {
  const app = express()
  const apollo = createApolloServer()

  await apollo.start()

  apollo.applyMiddleware({ app, path: '/api/graphql' })

  return app
}

bootstrap().then(app => app.listen(3333, () => {
  console.log('Server working on port 3333')
}))