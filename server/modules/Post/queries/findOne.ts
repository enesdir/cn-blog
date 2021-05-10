import { idArg, queryField, nonNull, intArg } from 'nexus'

export const PostFindOneQuery = queryField('findOnePost', {
  type: 'Post',
  args: {
    postId: nonNull(intArg()),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.post.findUnique({
      where: { id: Number(args.postId) },
    })
  },
})
