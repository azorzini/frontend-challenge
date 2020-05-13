import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
}));

const PostDetails = () => {

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Card>
          <CardHeader
            title="When my wife's school said they had BBQ for Teacher Appreciation week, she was excited to hear to there was a vegetarian option! It was a potato with BBQ sauce"
            subheader="September 14, 2016"
          />
          <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );

};

export default PostDetails;