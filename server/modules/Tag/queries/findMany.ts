import { list, queryField } from 'nexus'

export const TagFindManyQuery = queryField('tags', {
  type: list('Tag'),
  args: {
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.tag.findMany({
      ...args,
    })
  },
})
