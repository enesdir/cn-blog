import { list, queryField } from 'nexus'

export const UserFindManyQuery = queryField('findManyUser', {
  type: list('User'),
  args: {
    where: 'UserWhereInput',
    orderBy: 'UserOrderByInput',
    cursor: 'UserWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.findMany({
      ...args,
    })
  },
})
