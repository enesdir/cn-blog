import { arg, mutationField, nonNull } from 'nexus'

export const TagCreateOneMutation = mutationField('createOneTag', {
  type: 'Tag',
  args: {
    data: nonNull(arg({
      type: 'TagCreateInput',
    })),
  },
  resolve(_parent, { data }, ctx) {
    return ctx.prisma.tag.create({
      data,
    })
  },
})
