import { list, queryField } from 'nexus'

export const PostFindManyQuery = queryField('findManyPost', {
  type: list('Post'),
  args: {
    where: 'PostWhereInput',
    orderBy: 'PostOrderByInput',
    cursor: 'PostWhereUniqueInput',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.findMany({
      ...args,
    })
  },
})
