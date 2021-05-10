import { list, queryField } from 'nexus'

export const PostFindManyQuery = queryField('posts', {
  type: list('Post'),
  args: {
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, _args, { prisma }) {
    return prisma.post.findMany({
      where: { published: { equals: true } }, orderBy: { createdAt: 'desc' }
    })
  },
})
