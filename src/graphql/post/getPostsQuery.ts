import { gql } from '@apollo/client'

export const getPostsQuery = gql`
  query findManyPost {
    posts(where: { published: { equals: true } }, orderBy: { createdAt: desc }) {
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
