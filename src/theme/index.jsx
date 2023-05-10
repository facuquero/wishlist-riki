import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    customText: {
      textWhiteLight: 'rgba(255,255,255, 0.8)',
      textWhite111: 'rgba(100,100,100, 1)',
      textWhite: '#ffffff',
    },
    customBlack: {
      at90: 'rgba(27,27,27,0.9)',
      black99a1: 'rgba(99,99,99,1)',
      black43a1: 'rgba(43,43,43,1)',
    },
    customGold: {
      light: '#ffd700',
      lightHover: 'rgba(235, 195, 0, 1)',
      dark: '#be7600',
      darkHover: 'rgba(170, 98, 0, 1)',
      at254a1: 'rgba(254, 247, 184, 1)',
      at254a04: 'rgba(254, 247, 184, 0.4)',
    },
  },
})
