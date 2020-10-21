import { gql } from '@apollo/client'

export const getPostsQuery = gql`
  query posts {
    posts {
      id
      title
      content
      author {
        id
        fullName
      }
    }
  }
`
