import * as React from "react";

import { Container } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import Context from "../Context";
import MusicCardComponent from "../Components/MusicCardComponent";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      flexWrap: "wrap",
      justifyContent: "center",
    },
  })
);

type Props = {};

const SearchResultPage: React.FC<Props> = () => {
  const classes = useStyles();
  const { musics } = React.useContext(Context);
  return (
    <Container className={classes.root}>
      {musics.map((music) => (
        <MusicCardComponent key={music.id} music={music} />
      ))}
    </Container>
  );
};
export default SearchResultPage;
