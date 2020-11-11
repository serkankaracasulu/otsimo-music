import "./App.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  AppBar,
  BottomNavigation,
  CssBaseline,
  Toolbar,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import AxiosInition from "./axiosInition";
import AppBarSpace from "./Components/AppBarSpace";
import HomeButton from "./Components/LogoButton";
import MusicPlayer from "./Components/MusicPlayer";
import SwitchDarkModeButton from "./Components/SwitchDarkModeButton";
import ContextProvier from "./Contex.Provier";
import AlbumPage from "./Pages/AlbumPage";
import ArtisPage from "./Pages/ArtisPage";
import LandingPage from "./Pages/LandingPage";
import SearchResultPage from "./Pages/SearchResultPage";
import AppThemeProvider from "./theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      width: "%100",
    },
    appBar: {
      backgroundColor: theme.palette.text.secondary,
    },
    bottomBar: {
      position: "fixed",
      bottom: 0,
      width: "100%",
      backgroundColor: "transparent",
      zIndex: 50,
    },
  })
);

function App() {
  const classes = useStyles();
  AxiosInition();
  return (
    <ContextProvier>
      <AppThemeProvider>
        <BrowserRouter>
          <CssBaseline />
          <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar className={classes.toolBar}>
                <HomeButton />
                <LandingPage />
                <SwitchDarkModeButton />
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
      </AppThemeProvider>
    </ContextProvier>
  );
}

export default App;
