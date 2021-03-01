import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Button,
  Grid,
  Toolbar,
  Container
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              gutterBottom>
              Photo Album
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph>
              Hello this is a photo,lets see how it looks like on the
              screen,Hello this is a photo,Hello this is a photo,lets see how it
              looks like on the screen,Hello this is a photo,
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4} spacing={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Heading
                    </Typography>
                    <Typography>
                      this is a media card. use this section to describe
                      something the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View
                    </Button>
                    <Button size='small' color='primary'>
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          CopyRight Recerved 2021
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Lets put something here to give the footer a purpose!
        </Typography>
      </footer>
    </>
  );
};

export default App;
