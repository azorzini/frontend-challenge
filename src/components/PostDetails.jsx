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
import styled from "styled-components";

const Content = ({ post }) => {

  const { post_hint, selftext, title, url, secure_media } = post.data;

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
      <StyledTypography> There was an error displaying the video </StyledTypography>
    );
  }
  return <>{<Typography>{selftext}</Typography>}</>;

};


const PostDetails = ({post}) => {
  if(!post) return null;

  const { title, subreddit_name_prefixed, author, num_comments, score } = post.data;

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
          <StyledCardMedia>
            <Content post={post}/>
          </StyledCardMedia>
          <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
              With <strong>{num_comments}</strong> comments and a score of <strong>{score}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );

};

export default PostDetails;

const StyledCardMedia = styled(CardMedia)`
  text-align: -webkit-center;
  margin: 20px 20px;
`;

const StyledTypography = styled(Typography)`
  text-align: -webkit-center;
  margin: 10px 0;
`;