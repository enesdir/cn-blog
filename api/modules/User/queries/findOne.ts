import { arg, queryField } from '@nexus/schema'

export const UserFindOneQuery = queryField('findOneUser', {
  type: 'User',
  nullable: true,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.findOne({
      where,
    })
  },
})
