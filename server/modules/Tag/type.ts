import { objectType } from 'nexus'

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('slug')
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve: (parent, _, ctx) =>
        ctx.prisma.tag
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .posts(),
    })
    t.field('postCount', {
      type: 'Int',
      resolve(root, {}, context) {
        return context.prisma.post.count({
          where: { tags: { some: { id: root.id } } },
        })
      },
    })
  },
})
