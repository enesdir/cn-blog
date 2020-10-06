import * as AllTypes from './modules'

import { IS_DEV } from '../src/utils/constants'
import { applyMiddleware } from 'graphql-middleware'
import { makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import path from 'path'
import { permissions } from './permissions'

const getPath = (fileName: string) => path.join(process.cwd(), 'api', 'generated', fileName)

export const nexusSchema = makeSchema({
  types: AllTypes,
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  shouldGenerateArtifacts: IS_DEV,
  outputs: {
    typegen: getPath('nexus-typegen.ts'),
    schema: getPath('schema.graphql'),
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context.ts'),
        alias: 'Context',
      },
    ],
  },
})

export const schema = applyMiddleware(nexusSchema, permissions)
