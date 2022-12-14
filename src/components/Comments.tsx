import React, { useState, useEffect } from "react";

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
import { ArticleComments, CurrentThread } from "./Interface/Interface";
import ShowComment from "./Others/ShowComment";

const Comments = (currentThread: CurrentThread) => {

  const finalRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [comments, setComments] = useState<ArticleComments[]>([]);

  let url: string = `https://www.reddit.com/r/DotA2/comments/${currentThread["props"]}.json?&limit=5`;

//   useEffect(() => {
//     // console.log(currentThread["props"]);
//     const fetchComments = async (threadId: string) => {
//         await fetch(url, {
//           headers: {
//             Accept: "application/json",
//           },
//         })
//           .then((res) => res.json)
//           .then((data) => console.log(data));
//       };
//   }, []);



  return (
    <div>
      <Button mt={4} onClick={onOpen}>
        Peek
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          backdropFilter="auto"
          backdropBlur="2px"
          bg="blackAlpha.100"
        />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Get comments from this API end point : {currentThread["props"]} */}
            <ShowComment threadId={currentThread["props"]} />
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Comments;
