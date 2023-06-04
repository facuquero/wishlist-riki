import { createTheme } from "@mui/material/styles";
import MalgunGothic from "../assets/font/malgun.ttf";
import MalgunGothicFont from "../assets/font/malgun.ttf";

const malgunGotic = {
  fontFamily: "Malgun Gothic Regular",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Malgun Gothic Regular'),
    local('Malgun-Gothic-Regular'),
    url(${MalgunGothic}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const theme = createTheme({
  palette: {
    customText: {
      textWhiteLight: "rgba(255,255,255, 0.8)",
      textWhiteblack: "rgba(30,30,30,1)",
      textWhite111: "rgba(100,100,100, 1)",
      textWhite: "#ffffff",
    },
    customBlack: {
      at90: "rgba(27,27,27,0.9)",
      black99a1: "rgba(99,99,99,1)",
      black43a1: "rgba(43,43,43,1)",
    },
    customGold: {
      light: "#ffd700",
      lightHover: "rgba(235, 195, 0, 1)",
      dark: "#be7600",
      darkHover: "rgba(170, 98, 0, 1)",
      at254a1: "rgba(254, 247, 184, 1)", //
      at254a12: "rgba(127, 122, 92, 1)", //
      at239a1: "rgba(239, 234, 174, 1)",
      at140a1: "rgba(140, 137, 105, 1)",
      at254a04: "rgba(185, 158, 91, 1)", //
      at200a04red: "rgba(250, 230, 151, 1)", //
      at254a043: "rgba(185, 158, 91, 1)", //
      at254a042: "rgba(92, 79, 46, 1)", //
    },
    customRed: {
      errorRed: "#d32f2f",
    },
  },
  typography: {
    fontFamily: `"Malgun Gothic",system-ui, "Roboto","Helvetica","Arial",sans-serif`,
  },
  /* overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [malgunGotic],
      },
    },
  }, */
  /*   components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Malgun Gothic';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Malgun Gothic'), local('Malgun-Gothic'), url(${MalgunGothicFont}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  }, */
});
