import React from "react";

import "./App.css";
import Tabbar from "./components/Tabbar";
import { ChakraProvider } from "@chakra-ui/react";
import Articles from "./components/Articles";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Tabbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
