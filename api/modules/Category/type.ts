import { objectType } from '@nexus/schema'

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.int('id', { nullable: false })
    t.string('name', { nullable: false })
    t.string('slug', { nullable: false })
    t.int('postId', { nullable: true })
    t.field('post', {
      type: 'Post',
      nullable: true,
      resolve: (_parent, _args, ctx) =>
        ctx.prisma.post
          .findOne({
            where: { id: Number(_parent.id) },
          })
          .post(),
    })
  },
})
