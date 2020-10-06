import { ApolloServer } from 'apollo-server-micro'
import { IS_DEV } from '@utils/constants'
import { ServerRegistration } from 'apollo-server-micro/dist/ApolloServer'
import { createContext } from '@api/context'
import { schema } from '@api/schema'

export const createServer = (params?: ServerRegistration) => {
  const apolloServer = new ApolloServer({
    schema,
    introspection: IS_DEV,
    playground: IS_DEV && {
      settings: {
        'request.credentials': 'same-origin',
        'editor.theme': 'dark',
      },
    },
    tracing: IS_DEV,
    context: createContext,
  })
  return apolloServer.createHandler(params)
}
