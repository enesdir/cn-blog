import { GraphQLDate, GraphQLURL } from 'graphql-scalars'

import { decorateType } from '@nexus/schema'

export const GQLDate = decorateType(GraphQLDate, {
  rootTyping: 'Date',
  asNexusMethod: 'date',
})

export const GQLURL = decorateType(GraphQLURL, {
  rootTyping: 'URL',
  asNexusMethod: 'url',
})
