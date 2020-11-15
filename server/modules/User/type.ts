import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  description: 'A user registered with the application',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.surname()
    t.model.email()
    t.model.password()
    t.field('role', { type: 'RoleEnum' })
    t.model.isDeleted()
    t.field('posts', {
      type: 'Post',
      nullable: false,
      list: [true],
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve: (parent, _, ctx) =>
        ctx.prisma.user
          .findOne({
            where: { id: Number(parent.id) },
          })
          .posts(),
    })
    t.field('comments', {
      type: 'Comment',
      nullable: false,
      list: [true],
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve: (parent, _, ctx) =>
        ctx.prisma.user
          .findOne({
            where: { id: Number(parent.id) },
          })
          .comments(),
    })
    t.field('createdAt', { nullable: false, type: 'DateTime' })

    t.field('fullName', {
      type: 'String',
      resolve: root => `${root.name} ${root.surname}`,
    })
  },
})
