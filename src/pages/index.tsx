import FacebookIcon from '@material-ui/icons/Facebook'
import FeaturedArea from '@app/components/layouts/Main/FeaturedArea'
import GitHubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import MainLayout from '@app/components/layouts/Main'
import PostsArea from '@app/components/layouts/Main/PostsArea'
import React from 'react'
import RightColumnArea from '@app/components/layouts/Main/RightColumnArea'
import TwitterIcon from '@material-ui/icons/Twitter'
import { getPostsQuery } from '@graphql/post/getPostsQuery'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/client'

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
    marginTop: theme.spacing(1),
  },
}))

const rightColumnArea = {
  title: 'About',
  description:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  archives: [
    { title: 'October 2020', url: '#' },
    { title: 'September 2020', url: '#' },
    { title: 'August 2020', url: '#' },
    { title: 'July 2020', url: '#' },
    { title: 'June 2020', url: '#' },
    { title: 'May 2020', url: '#' },
    { title: 'April 2020', url: '#' },
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 2019', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: '#' },
    { name: 'Twitter', icon: TwitterIcon, url: '#' },
    { name: 'Facebook', icon: FacebookIcon, url: '#' },
  ],
}

const HomePage = () => {
  const { loading, error, data } = useQuery(getPostsQuery)
  const classes = useStyles()
  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <MainLayout title="Welcome My Blog App">
      <FeaturedArea post={mainFeaturedPost} />
      <Grid container spacing={3} className={classes.mainGrid}>
        <PostsArea title="My Blog Posts" posts={data.posts} />
        <RightColumnArea
          title={rightColumnArea.title}
          description={rightColumnArea.description}
          archives={rightColumnArea.archives}
          social={rightColumnArea.social}
        />
      </Grid>
    </MainLayout>
  )
}

HomePage.defaultProps = {
  i18nNamespaces: ['common'],
}

export default HomePage
