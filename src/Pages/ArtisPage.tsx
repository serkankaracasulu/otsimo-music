import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { useParams } from "react-router-dom";
import useQuery from "../Helpers/useQuery";
import { GetArtistResponse, GetArtistVariables } from "../types";
import { Container, LinearProgress } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: grey["300"],
      padding: theme.spacing(3),
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
  if (loading) return <LinearProgress />;
  return (
    <Container maxWidth="md">
      <div></div>
    </Container>
  );
};
export default ArtisPage;
