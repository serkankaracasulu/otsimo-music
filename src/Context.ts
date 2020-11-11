import * as React from "react";

import { Music } from "./types";

export default React.createContext<{
  musics: Array<Music>;
  setMusics(musics: Array<Music>): void;
  musicUrl: string;
  setMusicUrl(url: string): void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  darkMode: true,
  musics: [],
  setMusics: () => {},
  musicUrl: "",
  setMusicUrl: () => {},
  setDarkMode: () => {},
});
