import React from "react";
import "./App.css";
import AxiosInition from "./axiosInition";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ContextProvier from "./Contex.Provier";
import LandingPage from "./Pages/LandingPage";
import SearchResultPage from "./Pages/SearchResultPage";
import {
  AppBar,
  BottomNavigation,
  CssBaseline,
  fade,
  ThemeProvider,
  Toolbar,
  Button,
} from "@material-ui/core";
import theme from "./theme";
import MusicPlayer from "./Components/MusicPlayer";
import AppBarSpace from "./Components/AppBarSpace";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AlbumPage from "./Pages/AlbumPage";
import HomeButton from "./Components/LogoButton";
import ArtisPage from "./Pages/ArtisPage";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      width: "%100",
    },
    appBar: {
      backgroundColor: fade(theme.palette.common.black, 0.75),
    },
    bottomBar: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "transparent",
    },
  })
);

function App() {
  const classes = useStyles();
  AxiosInition();
  return (
    <ContextProvier>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar className={classes.toolBar}>
                <HomeButton />
                <LandingPage />
              </Toolbar>
            </AppBar>
            <AppBarSpace />
            <Switch>
              <Route exact path="/">
                <SearchResultPage />
              </Route>
              <Route path="/album/:albumId">
                <AlbumPage />
              </Route>
              <Route path="/artist/:artistId">
                <ArtisPage />
              </Route>
            </Switch>
            <BottomNavigation className={classes.bottomBar}>
              <MusicPlayer />
            </BottomNavigation>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ContextProvier>
  );
}

export default App;
