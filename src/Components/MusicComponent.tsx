import * as React from "react";

import {
  fade,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayCircleOutline";

import Context from "../Context";
import getTime from "../Helpers/getTime";
import { Music } from "../types";
import getLisanceCode from "../Helpers/getLisanceCode";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    musicName: {
      flexGrow: 1,
    },
    infoContainer: {
      position: "absolute",
      top: "50%",
      right: 0,
    },
    lisance: {
      color: grey["500"],
      marginRight: theme.spacing(2),
    },
  })
);

type PropsType = {
  music: Music;
};
const MusicComponent: React.FC<PropsType> = ({ music }) => {
  const classes = useStyles();
  const { setMusicUrl } = React.useContext(Context);
  const handlePlayMusic = (url: Music["url"]) => {
    setMusicUrl(url);
  };
  return (
    <ListItem key={music.id}>
      <ListItemIcon>
        <IconButton onClick={() => handlePlayMusic(music.url)}>
          <PlayArrowIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemText primary={music.name} className={classes.musicName} />
      <div className={classes.infoContainer}></div>
      <Typography className={classes.lisance} variant="caption">
        {getLisanceCode(music.license_ccurl)}
      </Typography>
      <Typography>{getTime(music.duration)}</Typography>
    </ListItem>
  );
};
export default MusicComponent;
