// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#173760",
      dark: "#173760",
      light: "#173760",
    },
    text: {
      primary: "#173760",
      secondary: "#173760",
      dark: "#173760", // custom property
    },
  },
});

export default theme;
