
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
    
  
  }
});

export default theme
// export const themes = {
//     primary: "#2A85FF",
//     primary_color: "#FCFCFCBF",
//     error: "#FFBC9940",
//     backgroundGrey: "#F4F4F4",
//     colorGrey: "#6F767E"
// };
