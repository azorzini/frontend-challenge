import React, { useRef, useEffect} from 'react';
import { last } from 'lodash';
import { PostListItem } from "../components";
import { List, CircularProgress, ListItem } from '@material-ui/core';
import styled from "styled-components";

const StyledList = styled(List)`
  width: 100%;
`;

const StyledListItem = styled(ListItem)`
  margin-left: 40%;
`;

const Loading = () => (
  <StyledListItem alignItems="center">
    <CircularProgress />
  </StyledListItem>
);

const PostList = ({posts, setAfterTag, loading, error}) => {

  const lastElementRef = useRef();

  useEffect(() => {
    if (loading) return
    const lastElement = lastElementRef.current;
    if (!lastElement) return

    const observer = (new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setAfterTag(last(posts).data.name);
      }
    }));

    observer.observe(lastElementRef.current);

    return () => {
      if (!lastElement) return
      observer.unobserve(lastElement);
    }

  },[loading, posts, setAfterTag])

  return (
    <StyledList>
      {posts.map((post, i) => {
        if (posts.length === i + 1) {
          return (
            <PostListItem key={post.data.id} ref={lastElementRef} post={post} />
          );
        } else {
          return <PostListItem key={post.data.id} post={post} />
        }
      })}
      <div>{loading && <Loading />}</div>

      <div>{error && 'Error'}</div>
    </StyledList>
  )

};

export default PostList;