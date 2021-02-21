import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import CommentIcon from '@material-ui/icons/Comment'
import Divider from '@material-ui/core/Divider'
import EventIcon from '@material-ui/icons/Event';
import Fade from '@material-ui/core/Fade'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Link from '@app/components/common/Link'
import { Post as PostType } from '@graphql/generated'
import React from 'react'
import ScheduleIcon from "@material-ui/icons/Schedule";
import ShareIcon from '@material-ui/icons/Share'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import StyleOutlinedIcon from '@material-ui/icons/StyleOutlined'
import Typography from '@material-ui/core/Typography'
import { useState } from 'react'

interface PostProps {
  post: PostType
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '40.25%',
    },
    cardContentTop: {
      paddingBottom: theme.spacing(1),
    },
    cardActionsRight: {
      marginLeft: 'auto',
    },
    cardContentcenter: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
    bottom: {
      paddingTop: theme.spacing(1),
    },
    postDateBlock: {
      display: "flex",
      alignItems: "center",
      marginBottom: 12
    },

    dateIcon: {
      color: "#546e7a",
      width: 16,
      height: 16,
      marginRight: 6
    },
  })
)
const tags = [
  { id: 1, slug: 'tag1', name: 'tag1' },
  { id: 2, slug: 'tag2', name: 'tag2' },
  { id: 3, slug: 'tag3', name: 'tag3' },
]
export default function Post(props: PostProps) {
  const { post } = props
  const classes = useStyles()
  const [liked, setLiked] = useState<boolean>(false)
  const toggleLike = () => setLiked(prev => (prev = !prev))
  const color = liked ? 'secondary' : 'action'

  return (
    <Fade in>
      <Card className={classes.card}>
      <CardHeader
          title={post.title}
          action={
            <span className={classes.postDateBlock}>
              <ScheduleIcon className={classes.dateIcon} />
              2 min read
            </span>
          }
        />
        <CardHeader
          avatar={
            <IconButton aria-label="share" href={`/p/${post.id}`}>
              <Avatar aria-label="Author">{post.author.fullName.charAt(0)}</Avatar>
            </IconButton>
          }
          title={post.author.fullName}
          subheader={
            <span className={classes.postDateBlock}>
              <EventIcon className={classes.dateIcon} />
              {post.createdAt}
            </span>}
          action={
            <Button aria-label="follow" href={`/p/${post.id}`} variant="outlined" color="primary" size="small">
              Follow
            </Button>
          }
        />
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContentTop}>
          <Typography variant="h6" gutterBottom component="h2">
            <Link href="/p/[id]" color="inherit" as={`/p/${post.id}`}>
              {post.title}
            </Link>
          </Typography>
        </CardContent>
        <CardContent className={classes.cardContentcenter}>
          <Typography variant="body2" color="textSecondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardContent className={classes.bottom}>
          <Grid container wrap={'wrap'} spacing={1}>
            {tags.map(tag => (
              <Grid item key={tag.id}>
                <Chip
                  clickable
                  icon={<StyleOutlinedIcon />}
                  component={Link}
                  href={'/tags/[slug]'}
                  as={`/tags/${tag.slug}`}
                  size="small"
                  label={tag.name}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <Divider light />
        <CardActions disableSpacing>
          <Badge badgeContent={100} color="secondary">
            <ShowChartIcon />
          </Badge>
          <IconButton aria-label="Add to favorites" onClick={toggleLike}>
            <Badge badgeContent={20} color="secondary">
              <FavoriteIcon color={color} />
            </Badge>
          </IconButton>
          <IconButton aria-label="comment">
            <Badge badgeContent={55} color="secondary">
              <CommentIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Typography className={classes.cardActionsRight} variant="body2" color="textSecondary">
            Created at: 11.22.2020
          </Typography>
          <Button
            className={classes.cardActionsRight}
            size="small"
            color="primary"
            href="/p/[id]"
            as={`/p/${post.id}`}
            component={Link}
          >
           comments
          </Button>
        </CardActions>
      </Card>
    </Fade>
  )
}
