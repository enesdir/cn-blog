import { ApolloServer } from 'apollo-server-micro'
import { IS_DEV } from '../src/utils/constants'
import { ServerRegistration } from 'apollo-server-micro/dist/ApolloServer'
import { createContext } from './context'
import { schema } from './schema'

export async function createServer(params?: ServerRegistration) {
  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
    introspection: IS_DEV,
  })
  await apolloServer.start()
  return apolloServer.createHandler(params)
}
