import { objectType } from 'nexus'

export const BatchPayload = objectType({
  name: 'BatchPayload',
  definition(t) {
    t.int('count')
  },
})
