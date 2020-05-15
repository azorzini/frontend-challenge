import { makeServer } from '../mirageServer';
import { PostDetails } from "../components";
import React from "react";

let server;
server = makeServer({ environment: 'dev' });
const postWithImage = { data: server.create('post', 'withImage').attrs };
const postWithImage2 = { data: server.create('post', 'withImage2').attrs};
const postWithVideoNoFallBack = { data: server.create('post', 'withVideoButWithouthFallback').attrs};
const postWithVideo = { data: server.create('post', 'withVideo').attrs};

export default {
  title: 'PostDetails',
  component: PostDetails,
};

export const imagePost = () => <PostDetails post={postWithImage} />;
export const imagePost2 = () => <PostDetails post={postWithImage2} />;
export const videoPost = () => <PostDetails post={postWithVideoNoFallBack} />;
export const videoPost2 = () => <PostDetails post={postWithVideo} />;
