/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { IS_PROD, IS_SERVER } from '@utils/constants'
import { IncomingMessage, ServerResponse } from 'http'

import { onError } from '@apollo/client/link/error'

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(context: ResolverContext) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema')
    const { schema } = require('../../api/schema')
    return new SchemaLink({ schema, context })
  } else {
    return new HttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    })
  }
}

// error handling for Apollo Link
const errorLink = onError(apolloError => {
  const { graphQLErrors, networkError, operation } = apolloError
  if (!IS_PROD) {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        // eslint-disable-next-line no-console
        console.error(`[GraphQL error]: ${message}`, {
          locations,
          operationName: operation && operation.operationName,
          path,
        })
      })
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.error(`[Network error]: ${networkError}`)
    }
  }
})

export function createApolloClient(context?: ResolverContext) {
  return new ApolloClient({
    ssrMode: IS_SERVER,
    link: from([errorLink, createIsomorphLink(context)]),
    cache: new InMemoryCache(),
  })
}
