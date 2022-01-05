import { createTheme } from "@mui/material/styles";

const primaryMainColor = '#f44336';
const primaryLightColor = '#757ce8';

const buttonTheme = createTheme({
  palette: {
    primary: {
      light: primaryLightColor,
      main: primaryMainColor,
      dark: '#000',
      contrastText: '#fff',
    }, 

    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  }
});

export default buttonTheme;