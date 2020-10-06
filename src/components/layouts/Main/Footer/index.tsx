import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Copyright from './Copyright'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      boxShadow: 'none',
      textAlign: 'center',
      minHeight: '58px',
      alignItems: 'center',
      display: 'flex',
      margin: 'auto auto 0',
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
