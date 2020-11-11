import * as React from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Divider,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AlbumAvatarComponent from "../Components/AlbumAvatar";
import AlbumComponent from "../Components/AlbumComponent";
import MusicComponent from "../Components/MusicComponent";
import useQuery from "../Helpers/useQuery";
import { GetArtistResponse, GetArtistVariables } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    divider: {
      margin: theme.spacing(2, 0, 2, 0),
    },
    lastReleaseMusic: {
      flexGrow: 1,
    },
  })
);

type ParamType = {
  artistId: string;
};
type Props = {};

const ArtisPage: React.FC<Props> = () => {
  const classes = useStyles();
  const { artistId } = useParams<ParamType>();
  const { data, loading } = useQuery<GetArtistResponse, GetArtistVariables>(
    "artist",
    artistId
  );
  const [lastAlbum] = data?.albums || [];
  const lastAlbumMusics = data?.musics.filter(
    (d) => d.album_id === lastAlbum?.id
  );
  if (loading) return <LinearProgress />;
  if (data)
    return (
      <Container maxWidth="md" className={classes.root}>
        {
          <Typography gutterBottom variant="h1">
            {data.artist.name}
          </Typography>
        }

        <>
          {lastAlbum && lastAlbumMusics && (
            <Paper className={classes.paper}>
              <Typography gutterBottom variant="h5">
                Last Release
              </Typography>
              <Grid container>
                <Grid item>
                  <AlbumAvatarComponent album={lastAlbum} />
                </Grid>
                <Grid item className={classes.lastReleaseMusic}>
                  <MusicComponent music={lastAlbumMusics[0]} />
                </Grid>
              </Grid>
            </Paper>
          )}
          <Paper className={classes.paper}>
            <Typography gutterBottom variant="h5">
              Albums
            </Typography>
            <div className={classes.divider}>
              <Divider />
            </div>
            {data.albums.map((albumItem, index) => (
              <div key={albumItem.id}>
                <AlbumComponent
                  album={{
                    ...albumItem,
                    musics: data.musics.filter(
                      (m) => m.album_id === albumItem.id
                    ),
                  }}
                  showAlbumLink
                  hideDisplayName={true}
                />
                {data.albums.length - 1 !== index && (
                  <div className={classes.divider}>
                    <Divider />
                  </div>
                )}
              </div>
            ))}
          </Paper>
        </>
      </Container>
    );
  return <span></span>;
};
export default ArtisPage;
