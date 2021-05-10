import { list, queryField } from 'nexus'

export const UserFindManyQuery = queryField('users', {
  type: list('User'),
  args: {
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.findMany({
      ...args,
    })
  },
})
