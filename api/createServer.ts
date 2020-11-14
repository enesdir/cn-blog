import { ApolloServer } from 'apollo-server-micro'
import { IS_DEV } from '../src/utils/constants'
import { ServerRegistration } from 'apollo-server-micro/dist/ApolloServer'
import { createContext } from './context'
import { schema } from './schema'

export const createServer = (params?: ServerRegistration) => {
  const apolloServer = new ApolloServer({
    schema,
    context: createContext,
    introspection: IS_DEV,
    playground: IS_DEV && {
      settings: {
        'request.credentials': 'same-origin',
        'editor.theme': 'dark',
      },
    },
    tracing: IS_DEV,
  })
  return apolloServer.createHandler(params)
}
