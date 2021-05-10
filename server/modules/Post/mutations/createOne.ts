import { arg, mutationField, nonNull } from 'nexus'

export const PostCreateOneMutation = mutationField('createOnePost', {
  type: 'Post',
  args: {
    data: nonNull(arg({
      type: 'PostCreateInput',
    })),
  },
  async resolve(_parent, { data }, { prisma, user }) {
    /* userContext is not necessary cuz we are already check in authentication with graphql-shield rules */
    const userContext = await user
    if (!userContext) {
      return Promise.reject('User not authenticated')
    }
    return prisma.post.create({
      data: { author: { connect: { id: userContext.id } }, ...data },
    })
  },
})
