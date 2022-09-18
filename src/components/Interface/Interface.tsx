export interface Article {
  data: {
    id: string;
    title: string;
    domain: string;
    url: string;
    num_comments: string;
    thumbnail: string;
    media: {
      reddit_video: {
        fallback_url: string;
      };
    };
  };
}

export interface ArticleComments {
  data: {
    children: {
      body: string; // parent comment
    };
  };
}
export interface CurrentThread {
  props: string ;
  threadId: string;
}

export interface ThreadId {
  threadId: string;
}
