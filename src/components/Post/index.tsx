import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@app/components/common/Link'
import { Post as PostType } from '@graphql/generated'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))

interface PostProps {
  post: PostType
}
export default function Post(props: PostProps) {
  const classes = useStyles()
  const { post } = props

  return (
    <Link href="/p/[id]" as={`/p/${post.id}`}>
      <Typography variant="h6" gutterBottom>
        {post.title}
      </Typography>

      <Divider />
      <small>By {post.author ? post.author.fullName : 'Unknown Author'}</small>
      <p>{post.content}</p>
    </Link>
  )
}
