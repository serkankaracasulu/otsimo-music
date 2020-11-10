import { Button, fade } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: theme.spacing(1),
    },
  })
);

const HomeButton = () => {
  const classes = useStyles();
  return (
    <Button component={Link} to={"/"} color="primary" className={classes.root}>
      Music
    </Button>
  );
};
export default HomeButton;