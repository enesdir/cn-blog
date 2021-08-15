import { Direction, MuiThemeProvider, createTheme, darken } from '@material-ui/core/styles'
import { IS_BROWSER, IS_DEV, IS_SERVER } from '@utils/constants'
import { blue, pink } from '@material-ui/core/colors'
import { parseCookies, setCookie } from 'nookies'

import React from 'react'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export const themeColor = blue[700]

type PaletteType = 'light' | 'dark'

interface ThemeOptionsInterface {
  direction: Direction
  paletteType: PaletteType
  spacing: SpacingOptions
}

const initialThemeOptions: ThemeOptionsInterface = {
  direction: 'ltr',
  paletteType: 'light',
  spacing: 8, // spacing unit
}

type DispatchContextType = (value: ActionType) => void

export const DispatchContext = React.createContext<DispatchContextType>(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`')
})

if (IS_DEV) {
  DispatchContext.displayName = 'ThemeDispatchContext'
}

const useEnhancedEffect = IS_SERVER ? React.useEffect : React.useLayoutEffect

// https://fettblog.eu/typescript-react/hooks/#usereducer
// Alternativa p/ tipar actions e o dispatch usando Type Guards:
// https://dev.to/stephencweiss/usereducer-with-typescript-2kf
interface ActionType {
  // Use um union | se precisar de mais tipos
  type: 'CHANGE'
  payload: Partial<ThemeOptionsInterface>
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props

  const reducer = (state: ThemeOptionsInterface, action: ActionType) => {
    switch (action.type) {
      case 'CHANGE':
        return {
          ...state,
          paletteType: action.payload.paletteType || state.paletteType,
          direction: action.payload.direction || state.direction,
        }
      default:
        throw new Error(`Unrecognized type ${action.type}`)
    }
  }

  const [themeOptions, dispatch] = React.useReducer(reducer, initialThemeOptions)

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const preferredType = prefersDarkMode ? 'dark' : 'light'
  const { direction, paletteType = preferredType, spacing } = themeOptions
  const cookies = parseCookies()
  // FIXME: eslint react hooks error
  React.useEffect(() => {
    if (IS_BROWSER) {
      const nextPaletteType = cookies['paletteType'] as PaletteType

      dispatch({
        type: 'CHANGE',
        payload: { paletteType: nextPaletteType },
      })
    }
  }, [])

  // persist paletteType
  React.useEffect(() => {
    setCookie(null, 'paletteType', paletteType, { path: '/', sameSite: 'lax', maxAge: 31536000 })
  }, [paletteType])

  useEnhancedEffect(() => {
    document.body.dir = direction
  }, [direction])

  const theme = React.useMemo(() => {
    const nextTheme = createTheme({
      direction,
      palette: {
        primary: {
          main: paletteType === 'light' ? blue[700] : blue[200],
        },
        secondary: {
          main: paletteType === 'light' ? darken(pink.A400, 0.1) : pink[200],
        },
        type: paletteType,
        background: {
          default: paletteType === 'light' ? '#fff' : '#121212',
        },
      },
      spacing,
    })

    nextTheme.palette.background.level2 =
      paletteType === 'light' ? nextTheme.palette.grey[100] : '#333'

    nextTheme.palette.background.level1 =
      paletteType === 'light' ? '#fff' : nextTheme.palette.grey[900]

    return nextTheme
  }, [direction, paletteType, spacing])

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </MuiThemeProvider>
  )
}

interface ThemeProviderProps {
  children: React.ReactNode
}

export function useChangeTheme(): (nextOptions: Partial<typeof initialThemeOptions>) => void {
  const dispatch = React.useContext(DispatchContext)
  return React.useCallback(options => dispatch({ type: 'CHANGE', payload: options }), [dispatch])
}
