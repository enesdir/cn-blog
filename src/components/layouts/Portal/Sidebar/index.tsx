import React, { ReactEventHandler } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import MenuItems from './MenuItems'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: 240,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      // necessary for drawer list items to be below app bar
      ...theme.mixins.toolbar,
    },
  })
)

interface SidebarProps {
  isDesktop: boolean
  open: boolean
  onClose: ReactEventHandler
}

export default function Sidebar(props: SidebarProps) {
  const classes = useStyles()
  const { isDesktop, open, onClose } = props
  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isDesktop && open,
        [classes.drawerClose]: isDesktop && !open,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: isDesktop && open,
          [classes.drawerClose]: isDesktop && !open,
        }),
      }}
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }} // Better open performance on mobile.
    >
      {/* necessary for drawer list items to be below app bar for desktop resolution */}
      <div className={clsx({ [classes.toolbar]: isDesktop })} />
      <MenuItems />
    </Drawer>
  )
}
