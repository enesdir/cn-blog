import { arg, mutationField } from '@nexus/schema'

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: 'BatchPayload',
  args: {
    where: arg({
      type: 'UserWhereInput',
      nullable: true,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.user.deleteMany({ where })
  },
})
