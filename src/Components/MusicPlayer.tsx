import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Context from "../Context";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    player: {},
  })
);

export default function MusicPlayer() {
  const classes = useStyles();
  const { musicUrl } = React.useContext(Context);

  return (
    <Fade in={!!musicUrl}>
      <audio
        autoPlay
        id="player"
        controls
        src={musicUrl}
        className={classes.player}
      ></audio>
    </Fade>
  );
}
