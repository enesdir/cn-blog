import * as AllTypes from './modules'

import { IS_DEV } from '../src/utils/constants'
import { applyMiddleware } from 'graphql-middleware'
import { makeSchema } from '@nexus/schema'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'
import { permissions } from './permissions'

const getPath = (fileName: string) => path.join(process.cwd(), 'api', fileName)

export const nexusSchema = makeSchema({
  types: AllTypes,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  shouldGenerateArtifacts: IS_DEV,
  outputs: {
    typegen: getPath('generated/nexus-typegen.ts'),
    schema: getPath('generated/schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: getPath('context.ts'),
        alias: 'Context',
      },
    ],
    backingTypeMap: {
      Date: 'Date',
      URL: 'URL',
    },
  },
})

export const schema = applyMiddleware(nexusSchema, permissions)
