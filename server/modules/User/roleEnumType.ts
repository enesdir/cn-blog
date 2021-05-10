import { enumType } from 'nexus'

export const RoleEnum = enumType({
  name: 'RoleEnum',
  members: ['SUPER_USER', 'USER', 'ADMIN'],
  description: 'User Role',
})
