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
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 100%; 
  display:block; 
  height: auto;
`;

const Content = ({ post }) => {

  const { post_hint, selftext, title, url, secure_media, preview } = post.data;

  switch (post_hint) {
    case 'image':
      return <StyledImg src={url} alt={title} />;
    case 'hosted:video':
    case 'link':
    case 'rich:video':
      const { fallback_url } = preview?.reddit_video_preview ??
      secure_media?.reddit_video ?? { fallback_url: null };
      if (!fallback_url)
        return <StyledTypography> There was an error displaying the video </StyledTypography>
      return (
        <div className="embed-responsive embed-responsive-1by1">
          <video controls autoPlay loop className="embed-responsive-item">
            <source src={fallback_url} type="video/mp4" />
          </video>
        </div>
      );
    default:
      return <>{<Typography>{selftext}</Typography>}</>;
  }
};

const SelectPostDetails = () => {
  return (
    <CenteredTextCard >
      <CardHeader
        title={'Select a post to see details'}
      />
    </CenteredTextCard>
  );
}


const PostDetails = ({post}) => {
  if(!post) return <SelectPostDetails />;

  const { title, subreddit_name_prefixed, author, num_comments, score } = post.data;

  return (
    <Container>
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

const CenteredTextCard = styled(Card)`
  text-align: -webkit-center;
`;
