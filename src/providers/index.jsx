import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import theme from "../theme/index"

const AppProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          {children}
          <CssBaseline />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppProviders;
