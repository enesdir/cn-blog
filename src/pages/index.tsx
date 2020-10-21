import FeaturedArea from '@app/components/layouts/Main/FeaturedArea'
import Grid from '@material-ui/core/Grid'
import MainLayout from '@app/components/layouts/Main'
import Post from '@app/components/Post'
import PostsArea from '@app/components/layouts/Main/PostsArea'
import React from 'react'
import { getPostsQuery } from '@graphql/post/getPostsQuery'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/client'
import { useTranslation } from '@app/utils/i18next'

const mainFeaturedPost = {
  title: 'Title of a longer featured Area',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}))

const HomePage = () => {
  const { loading, error, data } = useQuery(getPostsQuery)
  const classes = useStyles()
  const { t } = useTranslation('common')
  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <MainLayout title={t('title.home')}>
      <FeaturedArea post={mainFeaturedPost} />
      <Grid container spacing={5} className={classes.mainGrid}>
        <PostsArea title="From the firehose">
          {data.posts.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </PostsArea>
      </Grid>
    </MainLayout>
  )
}

HomePage.defaultProps = {
  i18nNamespaces: ['common'],
}

export default HomePage
