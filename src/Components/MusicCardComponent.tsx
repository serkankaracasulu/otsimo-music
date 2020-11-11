import path from "path";
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Link,
  Typography,
} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayCircleOutline";

import Context from "../Context";
import { Music } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: 200,
      margin: theme.spacing(4),
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(2),
        width: "100%",
        maxWidth: 300,
      },
    },
    media: {
      height: 150,
    },
    title: {
      color: theme.palette.getContrastText(theme.palette.grey["500"]),
      fontWeight: 600,
    },
    lisance: {
      textDecoration: "unset",
      fontSize: "small",
      color: blue[900],
    },
    playIconContainer: {
      zIndex: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: fade(theme.palette.common.black, 0.85),
      textAlign: "center",
    },
    playIcon: {
      color: theme.palette.grey["300"],
      fontSize: "8rem",
    },
    cardContent: {
      flexGrow: 1,
    },
    cardActions: {
      alignSelf: "end",
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "flex-end",
    },
  })
);

type Props = {
  music: Music;
};

const MusicCardComponent: React.FC<Props> = ({ music }) => {
  const classes = useStyles();
  const [acitiveMusicId, setActiveMusicId] = React.useState<Music["id"]>("");
  const { setMusicUrl } = React.useContext(Context);
  const handleMouseEnter = (id: Music["id"]) => {
    setActiveMusicId(id);
  };
  const handleMusicPlay = (url: Music["url"]) => {
    setMusicUrl(url);
  };
  return (
    <Card
      key={music.id}
      className={classes.card}
      onMouseEnter={() => handleMouseEnter(music.id)}
      onMouseLeave={() => setActiveMusicId("")}
    >
      <CardActionArea onClick={() => handleMusicPlay(music.url)}>
        {acitiveMusicId === music.id && (
          <div className={classes.playIconContainer}>
            <PlayArrowIcon className={classes.playIcon} />
          </div>
        )}

        <CardMedia
          className={classes.media}
          image={music.album_images[0]}
          title={music.album_name}
        />
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1" className={classes.title}>
          {music.name}
        </Typography>
        <Link component={RouterLink} to={path.join("artist", music.artist_id)}>
          <Typography variant="body2">{music.artist_name}</Typography>
        </Link>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          variant="outlined"
          component={RouterLink}
          to={path.join("/album", music.album_id)}
        >
          Album
        </Button>
        <Link
          target="_blank"
          href={music.license_ccurl}
          className={classes.lisance}
        >
          Lisance
        </Link>
      </CardActions>
    </Card>
  );
};
export default MusicCardComponent;
