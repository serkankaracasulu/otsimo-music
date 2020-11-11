import * as React from "react";
import { lightBlue, red, grey } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Context from "./Context";

const AppThemeProvider: React.FC = ({ children }) => {
  const { darkMode } = React.useContext(Context);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: lightBlue,
      error: red,
      background: {
        paper: darkMode ? grey["700"] : grey["200"],
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppThemeProvider;
