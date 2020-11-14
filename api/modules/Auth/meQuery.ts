import { Context } from '../../context'
import { queryField } from '@nexus/schema'

export const Me = queryField('me', {
  type: 'User',
  nullable: true,
  description: 'The current authenticated User',
  resolve: async (_, __, ctx: Context) => {
    const userContext = await ctx.user

    if (!userContext) {
      /* if no userContext exists, fail silently */
      return
    }

    const user = await ctx.prisma.user.findOne({
      where: { id: Number(userContext.id) },
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  },
})
