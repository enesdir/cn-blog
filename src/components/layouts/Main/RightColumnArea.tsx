import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  rightColumnAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.type === 'light' ? grey[200] : grey[800],
  },
  rightColumnSection: {
    marginTop: theme.spacing(3),
  },
}))
export type ArchivesType = {
  title: string
  url: string
}
export type SocialType = {
  name: string
  icon: any
  url: string
}
interface RightColumnAreaProps {
  archives: ArchivesType[]
  description: string
  social: SocialType[]
  title: string
}

export default function RightColumnArea(props: RightColumnAreaProps) {
  const classes = useStyles()
  const { archives, description, social, title } = props

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} className={classes.rightColumnAboutBox}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.rightColumnSection}>
        Archives
      </Typography>
      {archives.map(archive => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom className={classes.rightColumnSection}>
        Social
      </Typography>
      {social.map(network => (
        <Link display="block" variant="body1" href={network.url} key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  )
}
