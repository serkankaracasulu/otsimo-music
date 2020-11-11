import * as React from "react";
import { useParams } from "react-router-dom";

import { Container, Grid, LinearProgress } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AlbumComponent from "../Components/AlbumComponent";
import useQuery from "../Helpers/useQuery";
import { GetAlbumResponse, GetAlbumVariables } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      flexGrow: 1,
    },
  })
);

type Props = {};

type ParamType = {
  albumId: string;
};

const AlbumPage: React.FC<Props> = () => {
  const classes = useStyles();
  const { albumId } = useParams<ParamType>();
  const { data, loading } = useQuery<GetAlbumResponse, GetAlbumVariables>(
    "album",
    albumId
  );

  if (loading) return <LinearProgress />;
  if (data)
    return (
      <Container maxWidth="md" className={classes.root}>
        <Grid container>
          <AlbumComponent album={{ ...data.album, musics: data.musics }} />
        </Grid>
      </Container>
    );
  return <h1>Albüm Sayfası</h1>;
};
export default AlbumPage;
