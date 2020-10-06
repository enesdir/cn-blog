import { objectType } from '@nexus/schema'

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('contain', { nullable: false })
    t.int('authorId', { nullable: true })
    t.field('author', {
      type: 'User',
      nullable: true,
      resolve: (_parent, _args, ctx) =>
        ctx.prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .author(),
    })
    t.int('postId', { nullable: true })
    t.field('post', {
      type: 'Post',
      nullable: false,
      resolve: (_parent, _args, ctx) =>
        ctx.prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .post(),
    })

    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
  },
})
