import SecondaryToolbar, { SectionType } from '@app/components/layouts/Main/SecondaryToolbar'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import HamburgerMenuIcon from '@app/components/layouts/shared/HamburgerMenuIcon'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import UserMenu from '@app/components/layouts/Portal/UserMenu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    headerTitle: {
      flexGrow: 1,
    },
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  })
)

interface HeaderProps {
  toggleSidebar: () => void
  title: string
  sections: SectionType[]
}

function Header(props: HeaderProps) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <HamburgerMenuIcon toggleSidebar={props.toggleSidebar} />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.headerTitle}
        >
          {props.title}
        </Typography>
        <Hidden xsDown>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <UserMenu />
        </Hidden>
      </Toolbar>
      <SecondaryToolbar sections={props.sections} />
    </React.Fragment>
  )
}

export default Header
