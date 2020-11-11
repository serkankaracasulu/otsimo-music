import * as React from "react";

import {
  createStyles,
  fade,
  InputBase,
  InputProps,
  makeStyles,
  Theme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import Context from "../Context";
import useLayzQuery from "../Helpers/useLayzQuery";
import useQuery from "../Helpers/useQuery";
import { SearchMusicResponse, SearchMusicVariables } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      border: "solid 1px #b3b3b3",
      borderRadius: 20,
      color: theme.palette.getContrastText(
        fade(theme.palette.action.disabled, 0.45)
      ),
      backgroundColor: fade(theme.palette.action.disabled, 0.45),
      "&:hover": {
        backgroundColor: fade(theme.palette.action.disabled, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      right: 0,
      top: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  })
);

type Props = {};

const LandingPage: React.FC<Props> = () => {
  const classes = useStyles();
  const { setMusics } = React.useContext(Context);
  useQuery<SearchMusicResponse>(
    "recent/musics",
    undefined,
    (data) => data.musics && setMusics(data.musics)
  );
  const [fetch, { data, loading, error }] = useLayzQuery<
    SearchMusicResponse,
    SearchMusicVariables
  >("albums/search");
  const handleChange: InputProps["onChange"] = ({ target }) => {
    if (target.value) fetch({ q: target.value });
  };
  React.useEffect(() => {
    if (data && data.musics) {
      setMusics(data.musics);
    }
  });
  return (
    <>
      <div className={classes.search}>
        <InputBase
          fullWidth
          onChange={handleChange}
          placeholder="Search music,album or artist"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
