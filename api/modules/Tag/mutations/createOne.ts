import { arg, mutationField } from '@nexus/schema'

export const TagCreateOneMutation = mutationField('createOneTag', {
  type: 'Tag',
  nullable: false,
  args: {
    data: arg({
      type: 'TagCreateInput',
      nullable: false,
    }),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.tag.create({
      data,
    })
  },
})
