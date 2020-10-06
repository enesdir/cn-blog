import { UserFragment } from './UserFragment'
import { gql } from '@apollo/client'

export const meQuery = gql`
  query me {
    me {
      ...userFields
    }
  }
  ${UserFragment}
`
