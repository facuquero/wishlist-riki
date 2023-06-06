import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    customText: {
      textWhiteLight: 'rgba(255,255,255, 0.8)',
      textWhiteblack: 'rgba(30,30,30,1)',
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
      at254a1: 'rgba(254, 247, 184, 1)', //.
      at255a1: 'rgba(255, 253, 235, 1)', //.

      at254a1At50: 'rgba(254, 247, 184, 0.3)', //
      at254a12: 'rgba(127, 122, 92, 1)', //
      at239a1: 'rgba(239, 234, 174, 1)',
      at140a1: 'rgba(140, 137, 105, 1)',
      at254a04: 'rgba(185, 158, 91, 1)', //
      at200a04red: 'rgba(250, 230, 151, 1)', //
      at254a043: 'rgba(185, 158, 91, 1)', //
      at254a042: 'rgba(92, 79, 46, 1)', //
    },
    customRed: {
      errorRed: '#d32f2f',
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
  },
})
