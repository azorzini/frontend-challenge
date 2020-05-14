import { Server, Model, Factory, trait } from "miragejs";
import { lorem, random } from 'faker';

export function makeServer({ environment = "test" } = {}) {
  let server = new Server({
    environment,

    models: {
      post: Model,
      postData: Model,
    },

    factories: {
      post: Factory.extend({
        title(){
          return random.boolean() ? lorem.sentence() : lorem.paragraph();
        },
        thumbnail: 'default',
        author(){
          return random.arrayElement(['DonnieMostDefinitely', 'ktmud', 'SidTheKidd', 'ButterSpreadBoi', 'ElZim', 'ThisOtherKid']);
        },
        created_utc: 1589326449.0,
        score: random.number({ min: 680, max: 9800 }),
        num_comments: random.number({ min: 20, max: 1234 }),
        selftext: "",
        subreddit_name_prefixed(){
          return random.arrayElement(['r/memes', 'r/MurderedByWords', 'r/news', 'r/nextfuckinglevel']);
        },
        withVideoButWithouthFallback: trait({
          secure_media: null,
          post_hint: "rich:video",
          url: "https://www.nbcnews.com/news/nbcblk/black-woman-shot-killed-after-kentucky-police-entered-her-home-n1205651"
        }),
        withVideo: trait({
          secure_media: {
            reddit_video: {
              fallback_url: "https://v.redd.it/n9xn690a4hy41/DASH_1080?source=fallback",
              height: 1080,
              width: 608,
              scrubber_media_url: "https://v.redd.it/n9xn690a4hy41/DASH_96",
              dash_url: "https://v.redd.it/n9xn690a4hy41/DASHPlaylist.mpd",
              duration: 28,
              hls_url: "https://v.redd.it/n9xn690a4hy41/HLSPlaylist.m3u8",
              is_gif: true,
              transcoding_status: "completed"
            }
          },
          post_hint: "rich:video",
          url: "https://v.redd.it/n9xn690a4hy41",
        }),
        withImage: trait({
          post_hint: "image",
          thumbnail: "https://a.thumbs.redditmedia.com/1MMQoRj1v_TOGA2hsInwjJcwPgo2kq9G_gXuLBz2ME8.jpg",
          url: "https://i.redd.it/fnr06vj3rfy41.jpg",
        }),
        withImage2: trait({
          post_hint: "image",
          thumbnail: "https://b.thumbs.redditmedia.com/ITpharDrKHaMvZ6cCO3DUYb0-hLHEmksnSHXDsc1oyk.jpg",
          url: "https://i.redd.it/koh6a7y70gy41.jpg",
        })
      }),
    },

    seeds(server) {
      server.createList('post', 50);
    },

    routes() {
      this.urlPrefix = 'https://www.reddit.com';

      // This route will intercept requests to https://www.reddit.com
      this.get('/top.json', (schema, request) => {
        const posts = schema.db.posts;
        let thaRedditFormat = { data: { children: []}};
        posts.forEach((p) => {
          thaRedditFormat.data.children.push({ data: p})
        });
        return thaRedditFormat;
      });
    }
  })

  return server
}