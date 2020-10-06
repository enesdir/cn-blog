import { gql } from '@apollo/client'

export const UserFragment = gql`
  fragment userFields on User {
    id
    name
    surname
    email
    role
  }
`
