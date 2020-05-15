import React from 'react';
import { PostListItem } from '../components';

import { makeServer } from '../mirageServer';

let server;
server = makeServer({ environment: 'dev' });
const post = { data: server.create('post').attrs };
const postWithReallyLongTitle = { data: server.create('post', { title: 'Here I am overwriting a mirage Post factory default by just a long title'}).attrs };

export default {
  title: 'PostListItem',
  component: PostListItem,
};

export const simple = () => <PostListItem post={post}  />;
export const longTitle = () => <PostListItem post={postWithReallyLongTitle} />;
