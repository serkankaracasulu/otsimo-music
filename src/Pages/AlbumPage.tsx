import {
  Avatar,
  Container,
  fade,
  Grid,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Link,
} from "@material-ui/core";
import * as React from "react";
import path from "path";
import { grey } from "@material-ui/core/colors";
import PlayArrowIcon from "@material-ui/icons/PlayCircleOutline";
import { Link as RouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import useQuery from "../Helpers/useQuery";
import { GetAlbumResponse, GetAlbumVariables, Music } from "../types";
import Context from "../Context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: grey["300"],
      padding: theme.spacing(3),
    },
    avatar: {
      width: 150,
      height: 150,
      margin: theme.spacing(0, 3, 1, 3),
      borderRadius: 16,
    },
    icon: {
      color: grey["300"],
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.15),
      },
    },
    musicName: {
      flexGrow: 1,
    },
    infoContainer: {
      position: "absolute",
      top: "50%",
      right: 0,
    },
    lisance: {
      color: grey["500"],
      marginRight: theme.spacing(2),
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
  const { setMusicUrl } = React.useContext(Context);
  const { data, loading } = useQuery<GetAlbumResponse, GetAlbumVariables>(
    "album",
    albumId
  );
  const handlePlayMusic = (url: Music["url"]) => {
    setMusicUrl(url);
  };

  if (loading) return <LinearProgress />;
  if (data)
    return (
      <Container maxWidth="md">
        <Grid container className={classes.root}>
          <Grid>
            <Avatar
              src={data.album.images[0]}
              alt={data.album.name}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography variant="h3">{data.album.name}</Typography>
            <Link
              component={RouterLink}
              to={path.join("/artist", data.musics[0].artist_id)}
            >
              <Typography variant="h5">
                {data.musics[0]?.artist_name}
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <List>
              {data.musics.map((music) => (
                <ListItem key={music.id}>
                  <ListItemIcon>
                    <IconButton onClick={() => handlePlayMusic(music.url)}>
                      <PlayArrowIcon className={classes.icon} />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText
                    primary={music.name}
                    className={classes.musicName}
                  />
                  <div className={classes.infoContainer}></div>
                  <Typography className={classes.lisance} variant="caption">
                    cc-by
                  </Typography>
                  <Typography>{getTime(music.duration)}</Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    );
  return <h1>Albüm Sayfası</h1>;
};
export default AlbumPage;
const getTime = (duration: number) => {
  const time = duration / 60;
  const minute = Math.floor(time);
  const minuteStr = minute < 10 ? `0${minute}` : minute.toString();
  const second = duration % 60;
  const secondStr = second < 10 ? `0${second}` : second.toString();
  return `${minuteStr}:${secondStr}`;
};
