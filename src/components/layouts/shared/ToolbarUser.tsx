import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import React from 'react'
import UserAvatar from '@app/components/layouts/shared/UserAvatar'
import { useAuthState } from '@app/contexts/authContext'

function ToolbarUser() {
  const { name } = useAuthState()
  return (
    <List>
      <ListItem key="User">
        <ListItemIcon>
          <UserAvatar name={name} />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </List>
  )
}

export default ToolbarUser
