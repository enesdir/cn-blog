import { gql } from '@apollo/client'

export const getPostsQuery = gql`
  query posts {
    posts {
      id
      title
      author {
        id
        fullName
      }
      categories {
        id
        slug
        name
      }
      tags {
        id
        slug
        name
      }
      content
      published
      viewCount
      likeCount
      createdAt
    }
  }
`
