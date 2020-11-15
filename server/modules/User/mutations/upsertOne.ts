import { arg, mutationField } from '@nexus/schema'

export const UserUpsertOneMutation = mutationField('upsertOneUser', {
  type: 'User',
  nullable: false,
  args: {
    where: arg({
      type: 'UserWhereUniqueInput',
      nullable: false,
    }),
    create: arg({
      type: 'UserCreateInput',
      nullable: false,
    }),
    update: arg({
      type: 'UserUpdateInput',
      nullable: false,
    }),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.user.upsert({
      ...args,
    })
  },
})
