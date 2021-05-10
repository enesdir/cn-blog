import * as AllTypes from './modules'

import { IS_DEV } from '../src/utils/constants'
import { applyMiddleware } from 'graphql-middleware'
import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'
import { permissions } from './permissions'

const getPath = (fileName: string) => path.join(process.cwd(), 'server', fileName)

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
  contextType: {
    module: getPath('context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [{ module: '.prisma/client', alias: 'prisma' }],
  },
})

export const schema = applyMiddleware(nexusSchema, permissions)
