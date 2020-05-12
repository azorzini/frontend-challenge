import React, { useState, useRef, useCallback } from 'react';
import { usePosts }  from '../hooks';
import { last } from 'lodash';
import { PostListItem } from "../components";
import {List, CircularProgress, ListItem} from '@material-ui/core';
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

const PostList = () => {

  const [afterTag, setAfterTag] = useState('')
  const { posts, loading, error } = usePosts(afterTag);

  const observer = useRef()
  const lastPostElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log('visible');
        setAfterTag(last(posts).data.name)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <>
      <StyledList>
        {posts.map((post, i) => {
          if (posts.length === i + 1) {
            return (<div ref={lastPostElementRef}>
              <PostListItem key={i} data={post.data} />
            </div>);
          } else {
            return <PostListItem key={i} data={post.data} />
          }
        })}
        <div>{loading && <Loading />}</div>

        <div>{error && 'Error'}</div>
      </StyledList>
    </>
  )

};

export default PostList;