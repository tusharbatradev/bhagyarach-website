// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7086", // Blue (Logo like)
      dark : '#004d71',
      light: "#a5decd", // Green (From Logo)
    },
    background: {
      button: "#2e7086", //Logo Blue
      paper: "#FFFFFF", // Card & modal background
    },
    text: {
      primary: "#004e72", // Almost black
      dark : "#004d71",
      secondary: "#616161", // Muted grey
    },
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#ED6C02",
    },
    info: {
      main: "#0288D1",
    },
    success: {
      main: "#2E7D32",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          padding: "8px 16px",
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
  },
});

export default theme;
