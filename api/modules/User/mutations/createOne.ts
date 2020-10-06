import { arg, mutationField } from '@nexus/schema'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: 'User',
  nullable: false,
  args: {
    data: arg({
      type: 'UserCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.user.create({
      data,
    })
  },
})
