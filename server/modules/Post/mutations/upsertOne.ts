import { arg, mutationField, nonNull } from 'nexus'

export const PostUpsertOneMutation = mutationField('upsertOnePost', {
  type: 'Post',
  args: {
    where: nonNull(arg({
      type: 'PostWhereUniqueInput',
    })),
    create: nonNull(arg({
      type: 'PostCreateInput',
    })),
    update: nonNull(arg({
      type: 'PostUpdateInput',
    })),
  },
  resolve(_parent, args, ctx) {
    return ctx.prisma.post.upsert({
      ...args,
    })
  },
})
