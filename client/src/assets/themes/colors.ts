import {createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A85FF",
      contrastText: "#FCFCFCBF",
      dark: "#1A1D1F",
      light: "#FFFFFF",
    },
    grey: {
      400: "#EFEFEF",
      500: "#F4F4F4",
      600: "#9A9FA5",

    },
    error: {
      main: "#FFBC9940",
      contrastText: "#FF6A55",
    },


  }
});

export default theme
