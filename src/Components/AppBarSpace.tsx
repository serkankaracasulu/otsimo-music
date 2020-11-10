import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarSpace: {
      ...theme.mixins.toolbar,
    },
  })
);

export default function () {
  const classes = useStyles();
  return <div className={classes.appBarSpace} />;
}
