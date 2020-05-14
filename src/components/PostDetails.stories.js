import { makeServer } from '../mirageServer';
import { PostDetails } from "../components";
import React from "react";

let server;
server = makeServer({ environment: 'dev' });
const postWithImage = server.create('post', 'withImage');
const postWithImage2 = server.create('post', 'withImage2');
const postWithVideoNoFallBack = server.create('post', 'withVideoButWithouthFallback');
const postWithVideo = server.create('post', 'withVideo');

export default {
  title: 'PostDetails',
  component: PostDetails,
};

export const imagePost = () => <PostDetails post={postWithImage} />;
export const imagePost2 = () => <PostDetails post={postWithImage2} />;
export const videoPost = () => <PostDetails post={postWithVideoNoFallBack} />;
export const videoPost2 = () => <PostDetails post={postWithVideo} />;
