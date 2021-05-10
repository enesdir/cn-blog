import { objectType } from 'nexus'

export const Post = objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('content')
    t.boolean('published')
    t.int('viewCount')
    t.int('likeCount')
    t.int('authorId', )
    t.field('author', {
      type: 'User',
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findUnique({
            where: { id: Number(_parent.id) },
          })
          .author(),
    })
    t.list.field('tags', {
      type: 'Tag',
      args: {
        where: 'TagWhereInput',
      },
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findUnique({
            where: { id: Number(_parent.id) },
          })
          .tags(),
    })
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
      },
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findUnique({
            where: { id: Number(_parent.id) },
          })
          .categories(),
    })
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findUnique({
            where: { id: Number(_parent.id) },
          })
          .comments(),
    })
    t.field('commentCount', {
      type: 'Int',
      resolve(root, {}, { prisma }) {
        return prisma.post.count({
          where: { comments: { some: { id: root.id } } },
        })
      },
    })
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
