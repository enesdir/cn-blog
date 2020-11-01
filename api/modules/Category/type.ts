import { objectType } from '@nexus/schema'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.string('slug', { nullable: false })
    t.field('posts', {
      nullable: true,
      list: [true],
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
      nullable: false,
      resolve(root, {}, context) {
        return context.prisma.post.count({
          where: { categories: { some: { id: root.id } } },
        })
      },
    })
  },
})
