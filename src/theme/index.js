import { createTheme } from "@mui/material/styles";
import MuiButton from "./components/MuiButton";
import MuiCssBaseline from "./components/MuiCssBaseline";
import MuiTextField from "./components/MuiTextField";
import palette from "./palette";

const theme = createTheme({
  palette,
  components: {
    ...MuiButton,
    ...MuiTextField,
    ...MuiCssBaseline,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h6: {
      fontSize: "14px",
      fontWeight: "500",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "500",
      paddingBottom: "3px",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "500",
    },
    h3: {
      fontSize: "22px",
      fontWeight: "500",
    },
    h2: {
      fontSize: "26px",
      fontWeight: "500",
    },
    h1: {
      fontSize: "30px",
      fontWeight: "500",
    },
  },
});

export default theme;
