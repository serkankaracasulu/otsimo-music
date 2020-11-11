import { IconButton } from "@material-ui/core";
import * as React from "react";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Context from "../Context";
const SwitchDarkModeButton = () => {
  const { setDarkMode } = React.useContext(Context);
  const handleChangeMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <IconButton onClick={handleChangeMode}>
      <Brightness7Icon />
    </IconButton>
  );
};
export default SwitchDarkModeButton;
