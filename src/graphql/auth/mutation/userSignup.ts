import { gql } from '@apollo/client'

export const userSignupMutation = gql`
  mutation userSignup($name: String!, $surname: String, $email: String!, $password: String!) {
    userSignup(name: $name, surname: $surname, email: $email, password: $password) {
      user {
        id
      }
      token
      error
    }
  }
`
