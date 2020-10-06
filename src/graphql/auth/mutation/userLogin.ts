import { gql } from '@apollo/client'

export const userLoginMutation = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      user {
        id
      }
      token
      error
    }
  }
`
