import * as React from "react";

import Context from "./Context";
import { Music } from "./types";

const ContextProvier: React.FC = ({ children }) => {
  const [musics, setMusics] = React.useState<Array<Music>>([]);
  const [darkMode, setDarkMode] = React.useState(true);
  const [musicUrl, setMusicUrl] = React.useState("");
  return (
    <Context.Provider
      value={{
        musics,
        setMusics,
        musicUrl,
        setMusicUrl,
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvier;
