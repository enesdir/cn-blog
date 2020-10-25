import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import React, { ReactEventHandler, useMemo } from 'react'
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'
import { IS_BROWSER } from '@app/utils/constants'
import IconButton from '@material-ui/core/IconButton'
import MenuItems from './MenuItems'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import UserMenu from '@app/components/layouts/shared/ToolbarUser'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: 250,
      backgroundColor: theme.palette.background.paper,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    leftc: {
      position: 'absolute',
      right: '0px',
      padding: '20px',
    },
  })
)

interface SidebarProps {
  open: boolean
  onClose: ReactEventHandler
  onOpen: ReactEventHandler
}

export default function Sidebar(props: SidebarProps) {
  const theme = useTheme()
  const classes = useStyles()
  const { open, onOpen, onClose } = props
  const isMobile = useMemo(
    () => IS_BROWSER && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    []
  )
  const drawer = (
    <React.Fragment>
      <div className={classes.toolbar}>
        <UserMenu />
        <IconButton aria-label="Close drawer" onClick={onClose} className={classes.leftc}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <MenuItems />
    </React.Fragment>
  )
  return (
    <nav>
      <SwipeableDrawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        classes={{ paper: clsx(classes.paper, 'puffy-drawer') }}
        variant="temporary"
        disableBackdropTransition={!isMobile}
        disableDiscovery={isMobile}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
      >
        {drawer}
      </SwipeableDrawer>
    </nav>
  )
}
