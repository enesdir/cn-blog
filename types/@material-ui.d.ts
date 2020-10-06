import { TypeBackground as MuiTypeBackground } from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeBackground extends MuiTypeBackground {
    level1: string
    level2: string
  }
}
