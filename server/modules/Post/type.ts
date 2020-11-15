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
    t.int('likeCount')
    t.int('authorId', { nullable: false })
    t.field('author', {
      type: 'User',
      nullable: false,
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .author(),
    })
    t.list.field('tags', {
      type: 'Tag',
      nullable: true,
      args: {
        where: 'TagWhereInput',
      },
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .tags(),
    })
    t.list.field('categories', {
      nullable: true,
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
      },
      resolve: (_parent, _args, { prisma }) =>
        prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .categories(),
    })
    t.list.field('comments', {
      nullable: true,
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
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .comments(),
    })
    t.field('commentCount', {
      type: 'Int',
      nullable: false,
      resolve(root, {}, { prisma }) {
        return prisma.post.count({
          where: { comments: { some: { id: root.id } } },
        })
      },
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })
    t.field('updatedAt', { nullable: false, type: 'DateTime' })
  },
})
