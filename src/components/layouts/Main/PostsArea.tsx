import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { Post } from '@graphql/generated'
import PostCard from '@app/components/PostCard'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  item: {
    pageBreakInside: 'avoid',
    breakInside: 'avoid-column',
  },
}))
interface PostsAreaProps {
  posts: Post[]
  title: string
}
export default function PostsArea(props: PostsAreaProps) {
  const classes = useStyles()
  const { posts, title } = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <div key={post.id} className={classes.item}>
          <PostCard post={post} key={post.id} />
        </div>
      ))}
    </Grid>
  )
}
