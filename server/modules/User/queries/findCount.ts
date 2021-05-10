import { queryField } from 'nexus'

export const UserFindManyCountQuery = queryField('findManyUserCount', {
  type: 'Int',
  args: {
    where: 'UserWhereInput',
    orderBy: 'UserOrderByInput',
    cursor: 'UserWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.count(args)
  },
})
