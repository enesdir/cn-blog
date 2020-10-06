import { arg, queryField } from '@nexus/schema'

export const PostFindOneQuery = queryField('findOnePost', {
  type: 'Post',
  nullable: true,
  args: {
    where: arg({
      type: 'PostWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.post.findOne({
      where,
    })
  },
})
