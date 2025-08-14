// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7086",
      dark: "#004d71",
      light: "#a5decd",
    },
    text: {
      primary: "#2e7086",
      secondary: "#616161",
      dark: "#004d71", // custom property
    },
  },
});

export default theme;
