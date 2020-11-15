import { enumType } from '@nexus/schema'

export const RoleEnum = enumType({
  name: 'RoleEnum',
  members: ['SUPER_USER', 'USER', 'ADMIN'],
  description: 'User Role',
})
