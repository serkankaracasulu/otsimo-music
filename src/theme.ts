import { blue, red, grey } from "@material-ui/core/colors";
import { trTR } from "@material-ui/core/locale";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme(
  {
    palette: {
      primary: blue,
      error: red,
      background: {
        default: grey["900"],
      },
    },
  },
  trTR
);

export default theme;
