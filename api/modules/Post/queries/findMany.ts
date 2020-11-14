import { queryField } from '@nexus/schema'

export const PostFindManyQuery = queryField('findManyPost', {
  type: 'Post',
  nullable: true,
  list: true,
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
