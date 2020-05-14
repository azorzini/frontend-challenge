import React from 'react';
import { PostList } from '../components';

import { makeServer } from '../mirageServer';

let server;
server = makeServer({ environment: 'dev' });

export default {
  title: 'PostList',
  component: PostList,
};

export const simple = () => <PostList />;

