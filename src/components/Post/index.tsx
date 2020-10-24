import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@app/components/common/Link'
import { Post as PostType } from '@graphql/generated'
import React from 'react'
import Typography from '@material-ui/core/Typography'

interface PostProps {
  post: PostType
}
export default function Post(props: PostProps) {
  const { post } = props

  return (
    <Card>
      <CardActionArea>
        <CardActions>
          <Link href="/p/[id]" as={`/p/${post.id}`}>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
          </Link>
        </CardActions>
      </CardActionArea>
      <CardActionArea>
        <CardActions>
          By
          <Link href="/u/[id]" as={`/u/${post.author.id}`}>
            {post.author.fullName}
          </Link>
        </CardActions>
      </CardActionArea>
      <CardContent>{post.content}</CardContent>
    </Card>
  )
}
