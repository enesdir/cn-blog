import { arg, queryField } from '@nexus/schema'

export const TagFindOneQuery = queryField('findOneTag', {
  type: 'Tag',
  nullable: true,
  args: {
    where: arg({
      type: 'TagWhereUniqueInput',
      nullable: false,
    }),
  },
  resolve(_parent, { where }, ctx) {
    return ctx.prisma.tag.findOne({
      where,
    })
  },
})
