import { arg, queryField, nonNull } from 'nexus'

export const PostFindOneQuery = queryField('findOnePost', {
  type: 'Post',
  args: {
    where: nonNull(arg({
      type: 'PostWhereUniqueInput',
    })),
  },
  resolve(_parent, { where }, { prisma }) {
    return prisma.post.findUnique({
      where,
    })
  },
})
