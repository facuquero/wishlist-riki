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
    },
    customGold: {
      light: '#ffd700',
      lightHover: 'rgba(235, 195, 0, 1)',
      dark: '#be7600',
      darkHover: 'rgba(170, 98, 0, 1)',
    },
  },
})
