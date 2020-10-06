import React, { ReactEventHandler } from 'react'

import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

interface HamburgerMenuIconProps {
  toggleSidebar: ReactEventHandler
}
function HamburgerMenuIcon(props: HamburgerMenuIconProps) {
  return (
    <IconButton
      color="inherit"
      edge="start"
      aria-label="app-menu"
      data-testid="app-menu"
      onClick={props.toggleSidebar}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default HamburgerMenuIcon
