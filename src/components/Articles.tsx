import React, { useEffect, useState } from "react";
import {
  Image,
  Input,
  FormControl,
  FormLabel,
  Button,
  AspectRatio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Comments from "./Comments";

interface Article {
  data: {
    id: string;
    title: string;
    domain: string;
    url: string;
    num_comments: string;
    media: {
      reddit_video: {
        fallback_url: string;
      };
    };
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  //   const url = process.env.API_URL;

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    setUserInput(userInput);
    fetchArticles();
  };
  const url: string = `https://www.reddit.com/r/${userInput}/hot.json?&limit=15`;
  const defaultUrl: string = `https://www.reddit.com/r/dota2/hot.json?&limit=15`; // default page
  //   const commentUrl: string = `https://www.reddit.com/r/DotA2/comments/${article.data.id}.json?&limit=9`;

  const concatReddit: string = "www.reddit.com";

  useEffect(() => {
    const fetchArticles = async () => {
      await fetch(defaultUrl, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setArticles(data["data"]["children"]))
        .catch((err) => console.log(err));
    };
    fetchArticles();
  }, [defaultUrl]);

  const fetchArticles = async () => {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());

    const responseData = response["data"]["children"];
    setArticles(responseData);

    console.log(articles);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <FormControl>
          {/* <FormLabel>Browse</FormLabel> */}
          <Input
            type="text"
            width="auto"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Sub-reddits"
          />

          <Button type="submit">Search</Button>
        </FormControl>
      </form>
      {articles.length > 0 &&
        articles.map((article, idx) => {
          return (
            <div
              key={idx}
              className="container mx-auto bg-gray-200 rounded-xl shadow border p-12 m-10"
            >
              <p className="text-xl text-gray-700 font-bold mb-4">
                {article.data.title}
              </p>
              {article.data.domain === "i.redd.it" ? (
                <Image src={article.data.url} maxW={"sm"} />
              ) : article.data.domain === "v.redd.it" ? (
                <AspectRatio>
                  <iframe
                    allowFullScreen
                    title={"videos"}
                    src={article.data.media.reddit_video.fallback_url}
                  />
                </AspectRatio>
              ) : (
                ""
              )}

              <p className="text-gray-500 text-lg">
                Comments : {article.data.num_comments}
              </p>
              <p>{}</p>
              <Comments props={article.data.id} />
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
