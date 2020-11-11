import * as React from "react";

import { Fade } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Context from "../Context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {},
  })
);

export default function MusicPlayer() {
  const classes = useStyles();
  const { musicUrl } = React.useContext(Context);

  return (
    <audio
      autoPlay
      id="player"
      controls
      src={musicUrl}
      className={classes.player}
    ></audio>
  );
}
