import Avatar from '@material-ui/core/Avatar'
import React from 'react'

interface UserAvatarProps {
  name: string
}
function UserAvatar(props: UserAvatarProps) {
  return <Avatar alt={`Avatar of ${props.name}`} />
}

export default UserAvatar
