import { arg, queryField, nonNull } from 'nexus'

export const UserFindOneQuery = queryField('findOneUser', {
  type: 'User',
  args: {
    where: nonNull(arg({
      type: 'UserWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.findUnique({
      where,
    })
  },
})
