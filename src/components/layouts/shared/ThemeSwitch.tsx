import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import { Tooltip } from '@material-ui/core'
import { useChangeTheme } from '@app/contexts/ThemeContext'
import { useTheme } from '@material-ui/core/styles'

function ThemeSwitch() {
  const theme = useTheme()
  const changeTheme = useChangeTheme()
  const handleTogglePaletteType = () => {
    const paletteType = theme.palette.type === 'light' ? 'dark' : 'light'

    changeTheme({ paletteType })
  }
  return (
    <Tooltip title="Toggle light/dark theme" enterDelay={300}>
      <IconButton
        color="inherit"
        onClick={handleTogglePaletteType}
        aria-label="Toggle light/dark theme"
      >
        {theme.palette.type === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeSwitch
