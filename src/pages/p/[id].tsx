import MainLayout from '@app/components/layouts/Main'
import Post from '@app/components/Post'
import React from 'react'
import { getPostQuery } from '@graphql/post/getPostQuery'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

const PostPage = () => {
  // FIXME: dummy conversion string argument to integer
  const postId = Number(useRouter().query.id)
  const { loading, error, data } = useQuery(getPostQuery, {
    variables: { postId },
  })

  if (loading) {
    console.log('loading')
    return <div>Loading ...</div>
  }
  // if (error) {
  //   console.log('error')
  //   return <div>Error: {error.message}</div>
  // }

  console.log(`response`, data)

  let title = data.findOnePost.title
  if (!data.findOnePost.published) {
    title = `${title} (Draft)`
  }

//  const authorName = data.findOnePost.author ? data.findOnePost.author.name : 'Unknown author'
  return (
    <MainLayout headTitle={title} title="Welcome My Blog Post App">
        <Post post={data.findOnePost} key={data.findOnePost.id} />
    </MainLayout>
  )
}

export default PostPage
