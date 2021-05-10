import { arg, queryField, nonNull, intArg } from 'nexus'

export const TagFindOneQuery = queryField('findOneTag', {
  type: 'Tag',
  args: {
    tagId: nonNull(intArg()),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.tag.findUnique({
      where: { id: Number(args.tagId) },
    })
  },
})
