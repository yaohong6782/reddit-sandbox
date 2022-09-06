import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Articles from "./Articles";



const Tabbar = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Browse others</Tab>
        <Tab px={10}>One</Tab>
        <Tab px={10}>Two</Tab>
        <Tab px={10}>Three</Tab>
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
