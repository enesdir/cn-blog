import { gql } from '@apollo/client'

export const getPostsQuery = gql`
  query posts {
    posts(where: { published: { equals: true } }, orderBy: { createdAt: desc }) {
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
