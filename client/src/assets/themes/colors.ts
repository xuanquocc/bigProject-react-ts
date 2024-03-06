import {createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A85FF",
      contrastText: "#FCFCFCBF",
    },
    grey: {
      500: "#F4F4F4",
      600: "#9A9FA5",
    },
    error: {
      main: "#FFBC9940",
      contrastText: "#FF6A55",
    },
    success: {
      main: "#B5E4CA",
    }
  },
});

export default theme
