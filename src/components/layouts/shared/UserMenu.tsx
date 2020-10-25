import React, { useState } from 'react'
import { useAuthDispatch, useAuthState } from '@app/contexts/authContext'

import AccountIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FaceIcon from '@material-ui/icons/Face'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ThemeSwitch from '@app/components/layouts/shared/ThemeSwitch'

function UserMenu() {
  const { signOut } = useAuthDispatch()
  const { name } = useAuthState()

  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <React.Fragment>
      <ThemeSwitch />
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="profile-menu"
        data-testid="profile-menu"
        onClick={e => setAnchorEl(e.currentTarget)}
      >
        <AccountIcon />
      </IconButton>
      <Menu
        id="profile-menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        disableAutoFocusItem
        keepMounted
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem>
          <FaceIcon />
          <b>{name}</b>
        </MenuItem>
        <MenuItem onClick={signOut}>
          <ExitToAppIcon />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

export default UserMenu
