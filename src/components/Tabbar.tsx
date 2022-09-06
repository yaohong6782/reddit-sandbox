import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Articles from "./Articles";



const Tabbar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Browse others</Tab>
        <Tab px={10}>New</Tab>
        <Tab px={10}>Rising</Tab>
        <Tab px={10}>Controversial</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
            <Articles/>
        </TabPanel>
        <TabPanel>
            <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Tabbar;
