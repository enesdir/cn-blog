import { list, queryField } from 'nexus'

export const TagFindManyQuery = queryField('findManyTag', {
  type: list('Tag'),
  args: {
    where: 'TagWhereInput',
    orderBy: 'TagOrderByInput',
    cursor: 'TagWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.findMany({
      ...args,
    })
  },
})
