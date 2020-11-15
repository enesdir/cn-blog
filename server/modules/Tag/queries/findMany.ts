import { queryField } from '@nexus/schema'

export const TagFindManyQuery = queryField('findManyTag', {
  type: 'Tag',
  nullable: true,
  list: true,
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
