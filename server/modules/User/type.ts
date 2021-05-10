import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  description: 'A user registered with the application',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('surname')
    t.string('email')
    t.nonNull.string('password')
    t.field('role', { type: 'RoleEnum' })
    t.boolean('isDeleted')
    t.list.field('posts', {
      type: 'Post',
      resolve: (parent, _, ctx) =>
        ctx.prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    })
    t.list.field('comments', {
      type: 'Comment',
      resolve: (parent, _, ctx) =>
        ctx.prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .comments(),
    })
    t.nonNull.field('createdAt', { type: 'DateTime' })

    t.field('fullName', {
      type: 'String',
      resolve: root => `${root.name} ${root.surname}`,
    })
  },
})
