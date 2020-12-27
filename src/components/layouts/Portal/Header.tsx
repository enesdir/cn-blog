import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import HamburgerMenuIcon from '@app/components/layouts/shared/HamburgerMenuIcon'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UserMenu from '@app/components/layouts/shared/UserMenu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

interface HeaderProps {
  toggleSidebar: () => void
  title: string
}
function Header(props: HeaderProps) {
  const classes = useStyles()

  return (
    <AppBar elevation={1} color="inherit" className={classes.appBar} position="fixed">
      <Toolbar>
        <HamburgerMenuIcon toggleSidebar={props.toggleSidebar} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          {props.title}
        </Typography>
        <UserMenu />
      </Toolbar>
    </AppBar>
  )
}

export default Header
