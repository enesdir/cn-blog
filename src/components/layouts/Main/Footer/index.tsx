import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Copyright from './Copyright'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(6, 0),
      backgroundColor: theme.palette.background.paper,
    },
  })
)
export default function Footer() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}
