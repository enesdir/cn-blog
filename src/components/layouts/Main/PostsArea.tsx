import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}))
interface PostsAreaProps {
  children: React.ReactNode
  title: string
}
export default function PostsArea(props: PostsAreaProps) {
  const classes = useStyles()
  const { children, title } = props

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {children}
    </Grid>
  )
}
