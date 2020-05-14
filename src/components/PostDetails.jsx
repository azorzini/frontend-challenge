import React from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { has } from 'lodash';

const Content = ({ post }) => {

  const { post_hint, selftext, title, url, secure_media } = post;

  if (post_hint === 'image') {
    return <img src={url} className="img-fluid" alt={title} />;
  }
  if (post_hint === 'rich:video'){

    if(has(secure_media, 'reddit_video.fallback_url')) {
      return (
        <>
          <video controls autoPlay loop >
            <source src={secure_media.reddit_video.fallback_url} type="video/mp4" />
          </video>
        </>
      );
    }
    return (
      <Typography> There was an error displaying the video </Typography>
    );
  }
  return <>{<Typography>{selftext}</Typography>}</>;

};


const PostDetails = ({post}) => {
  const { title, subreddit_name_prefixed, author, num_comments, score } = post;

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
            title={title}
            subheader={`${subreddit_name_prefixed} Posted by ${author}`}
          />
          <CardMedia>
            <Content post={post}/>
          </CardMedia>
          <CardContent>

            <Typography variant="body1" color="textPrimary" component="p">
              {`With ${num_comments} comments and a score of ${score} `}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );

};

export default PostDetails;