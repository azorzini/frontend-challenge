import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  Favorite,
  Share,
  ExpandMore,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

const PostDetails = () => {


  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Card className={classes.root}>
          <CardHeader
/*            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }*/
            title="When my wife's school said they had BBQ for Teacher Appreciation week, she was excited to hear to there was a vegetarian option! It was a potato with BBQ sauce"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
            <IconButton
              aria-label="show more"
            >
              <ExpandMore />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );

};

export default PostDetails;