import { objectType } from 'nexus'

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.int('id',)
    t.string('contain',)
    t.int('authorId',)
    t.nullable.field('author', {
      type: 'User',
      resolve: (_parent, _args, ctx) =>
        ctx.prisma.post
          .findUnique({
            where: { id: Number(_parent.id) },
          })
          .author(),
    })
    t.nullable.int('postId',)
    t.field('post', {
      type: 'Post',
      resolve(parent: any) {
        return parent['post']
      },
    })

    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
