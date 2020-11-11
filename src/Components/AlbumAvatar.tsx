import * as React from "react";

import { Avatar } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Album } from "../types";

type PropsType = {
  album: Album;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 150,
      height: 150,
      margin: theme.spacing(0, 3, 1, 3),
      borderRadius: 16,
    },
  })
);
const AlbumAvatarComponent: React.FC<PropsType> = ({ album }) => {
  const classes = useStyles();
  return (
    <Avatar src={album.images[0]} alt={album.name} className={classes.root} />
  );
};
export default AlbumAvatarComponent;
