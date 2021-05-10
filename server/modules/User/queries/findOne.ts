import { nonNull, intArg, queryField } from 'nexus'

export const UserFindOneQuery = queryField('findOneUser', {
  type: 'User',
  args: {
    userId: nonNull(intArg()),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.findUnique({
      where: { id: Number(args.userId) },
    })
  },
})
