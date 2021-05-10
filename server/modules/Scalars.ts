import { DateTimeResolver, URLResolver } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'

export const GQLDate = asNexusMethod(DateTimeResolver, 'date')
export const GQLURL = asNexusMethod(URLResolver, 'url')