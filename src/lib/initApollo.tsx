/* eslint-disable @typescript-eslint/no-var-requires */
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from } from '@apollo/client'
import { GRAPHQL_URL, IS_BROWSER, IS_PROD, IS_SERVER } from '@utils/constants'
import { IncomingMessage, ServerResponse } from 'http'

import { getToken } from '@utils/tokenHelper'
import { onError } from '@apollo/client/link/error'

export type ResolverContext = {
  req?: IncomingMessage
  res?: ServerResponse
}

function createIsomorphLink(ctx: ResolverContext) {
  const token = getToken(ctx)
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema')
    const { schema } = require('../../api/schema')
    return new SchemaLink({ schema, context: ctx })
  } else {
    return new HttpLink({
      uri: GRAPHQL_URL,
      credentials: 'same-origin',
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
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

export function createApolloClient(context: ResolverContext) {
  return new ApolloClient({
    connectToDevTools: IS_BROWSER,
    ssrMode: IS_SERVER,
    link: from([errorLink, createIsomorphLink(context)]),
    cache: new InMemoryCache(),
  })
}
