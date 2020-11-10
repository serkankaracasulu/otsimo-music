import * as React from "react";
import {
  createStyles,
  fade,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayCircleOutline";
import blue from "@material-ui/core/colors/blue";
import path from "path";
import { Link as RouterLink } from "react-router-dom";
import Context from "../Context";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  Container,
  Link,
  Fade,
  CardActions,
  Button,
} from "@material-ui/core";
import { Music } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100%",
      flexDirection: "column",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: 200,
      margin: theme.spacing(4),
      backgroundColor: theme.palette.grey["500"],
      [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(2),
        width: "100%",
      },
    },
    insideRoot: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
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

type Props = {};

const SearchResultPage: React.FC<Props> = () => {
  const classes = useStyles();
  const [acitiveMusicId, setActiveMusicId] = React.useState<Music["id"]>("");
  const { musics, setMusicUrl } = React.useContext(Context);
  const handleMouseEnter = (id: Music["id"]) => {
    setActiveMusicId(id);
  };
  const handleMusicPlay = (url: Music["url"]) => {
    setMusicUrl(url);
  };
  return (
    <div className={classes.root}>
      <Container className={classes.insideRoot}>
        {musics.map((music) => (
          <Card
            key={music.id}
            className={classes.card}
            onMouseEnter={() => handleMouseEnter(music.id)}
            onMouseLeave={() => setActiveMusicId("")}
          >
            <CardActionArea onClick={() => handleMusicPlay(music.url)}>
              <Fade in={acitiveMusicId === music.id}>
                <div className={classes.playIconContainer}>
                  <PlayArrowIcon className={classes.playIcon} />
                </div>
              </Fade>
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
              <Typography variant="body2">{music.artist_name}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                variant="outlined"
                component={RouterLink}
                to={path.join("/album", music.album_id)}
              >
                Album
              </Button>
              <Link href={music.license_ccurl} className={classes.lisance}>
                Lisance
              </Link>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};
export default SearchResultPage;
