import { objectType } from '@nexus/schema'

export const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.string('slug', { nullable: false })
    t.list.field('posts', {
      type: 'Post',
      nullable: false,
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve: (parent, _, ctx) =>
        ctx.prisma.tag
          .findOne({
            where: { id: Number(parent.id) },
          })
          .posts(),
    })
    t.field('postCount', {
      type: 'Int',
      nullable: false,
      resolve(root, {}, context) {
        return context.prisma.post.count({
          where: { tags: { some: { id: root.id } } },
        })
      },
    })
  },
})
