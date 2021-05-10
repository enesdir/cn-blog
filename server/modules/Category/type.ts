import { objectType } from 'nexus'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.int('id')
    t.string('name')
    t.string('slug')
    t.nullable.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
      },
      resolve(parent: any) {
        return parent['posts']
      },
    })
    t.field('postCount', {
      type: 'Int',
      resolve(root, {}, ctx) {
        return ctx.prisma.post.count({
          where: { categories: { some: { id: root.id } } },
        })
      },
    })
  },
})
