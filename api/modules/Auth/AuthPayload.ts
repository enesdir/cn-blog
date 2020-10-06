import { objectType } from '@nexus/schema'

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.string('error', { nullable: true })
    t.field('user', { type: 'User' })
  },
})
