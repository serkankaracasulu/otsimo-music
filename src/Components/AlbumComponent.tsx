import path from "path";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Grid, Link, List, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Album, Music } from "../types";
import AlbumAvatarComponent from "./AlbumAvatar";
import MusicComponent from "./MusicComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      flexGrow: 1,
    },
  })
);

type PropType = {
  album: {
    musics: Music[];
  } & Album;
  hideDisplayName?: boolean;
  showAlbumLink?: boolean;
};
const AlbumComponent: React.FC<PropType> = ({
  album,
  hideDisplayName,
  showAlbumLink,
}) => {
  const classes = useStyles();
  const { musics } = album;
  return (
    <Grid container className={classes.root}>
      <Grid item>
        <AlbumAvatarComponent album={album} />
      </Grid>
      <Grid item>
        {showAlbumLink ? (
          <Link
            color="inherit"
            component={RouterLink}
            to={path.join("/album", album.id)}
          >
            <Typography variant="h4">{album.name}</Typography>
          </Link>
        ) : (
          <Typography variant="h4">{album.name}</Typography>
        )}
        {!hideDisplayName && (
          <Link
            component={RouterLink}
            to={path.join("/artist", musics[0].artist_id)}
          >
            <Typography variant="h5">{musics[0]?.artist_name}</Typography>
          </Link>
        )}
      </Grid>
      <Grid item xs={12}>
        <List>
          {musics.map((music) => (
            <MusicComponent key={music.id} music={music} />
          ))}
        </List>
      </Grid>
    </Grid>
  );
};
export default AlbumComponent;
