import { objectType } from '@nexus/schema'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('title')
    t.string('content', {
      nullable: true,
    })
    t.boolean('published', { nullable: false })
    t.int('viewCount')
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
    t.field('comments', {
      nullable: false,
      list: [true],
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['comments']
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
  },
})
