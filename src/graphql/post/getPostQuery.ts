import { gql } from '@apollo/client'

export const getPostQuery = gql`
  query findOnePost($postId: Int!) {
    findOnePost(where: { id: $postId }) {
      id
      title
      author {
        id
        fullName
      }
      content
      published
    }
  }
`
