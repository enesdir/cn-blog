import { gql } from '@apollo/client'

export const getPostQuery = gql`
  query findOnePost($postId: Int!) {
    findOnePost(postId: $postId) {
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
      comments {
        id
        contain
        author {
          id
          fullName
        }
        createdAt
      }
      content
      published
      viewCount
      likeCount
      createdAt
      updatedAt
    }
  }
`
