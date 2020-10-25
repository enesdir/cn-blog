import { gql } from '@apollo/client'

export const getCategoriesQuery = gql`
  query categories {
    categories {
      id
      name
      slug
    }
  }
`
