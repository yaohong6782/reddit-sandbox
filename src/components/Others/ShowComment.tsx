import React, { useState } from "react";
import { CurrentThread, ThreadId, Article } from "../Interface/Interface";

const ShowComment = (threadId: ThreadId ) => {
  let id = threadId.threadId;
  console.log(threadId.threadId);

  // need first 5 comments only
  let url: string = `https://www.reddit.com/r/DotA2/comments/${id}.json?&limit=5`;

  const [currentComments, setCurrentComments] = useState<Article[]>([]);
  return <p>{url}</p>;
};

export default ShowComment;
