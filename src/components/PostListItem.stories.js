import React from 'react';
import { PostListItem } from '../components';

import { makeServer } from '../mirageServer';

let server;
server = makeServer({ environment: 'dev' });
const post = server.create('post');
const postWithReallyLongTitle = server.create('post', { title: 'Here I am overwriting a mirage Post factory default by just a long title'});

export default {
  title: 'PostListItem',
  component: PostListItem,
};

export const simple = () => <PostListItem data={post}  />;
export const longTitle = () => <PostListItem data={postWithReallyLongTitle} />;
