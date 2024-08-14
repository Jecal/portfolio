import Navbar from "../components/Navbar";

// chakra
import {
  Show,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorMode,
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function Projects() {
  return (
    <>
      <VStack>
        <Navbar />
        <Main />
      </VStack>
    </>
  );
}

const Main = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Show above="md">
        <Box w={"2xl"}>
          <Tabs variant="unstyled" isFitted>
            <TabList
              bg={colorMode === "light" ? "gray.50" : "#292929"}
              p={2}
              borderRadius={10}
              borderWidth={1}
            >
              <Tab>web dev</Tab>
              <Tab>graphic design</Tab>
              <Tab>video editing</Tab>
            </TabList>
            <TabPanels mt={4}>
              <TabPanel>
                <Flex direction={"row"} alignItems={"center"}>
                  <Box>
                    <Image
                      src="/benkyooLanding.png"
                      borderRadius={10}
                      my={4}
                      w={"lg"}
                    />
                  </Box>
                  <Box ml={8}>
                    <Flex direction={"column"}>
                      <Box mb={4}>
                        <Heading as="h2" fontSize={"2xl"}>
                          benkyoo
                        </Heading>
                        <Text maxW={"lg"}>
                          this is a webapp for students to share their class
                          notes and study guides. made during buildspace n&w s5!
                        </Text>
                      </Box>
                      <Link href={"https://benkyoo.netlify.app/"} isExternal>
                        check it out! <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Flex>
                  </Box>
                </Flex>
                <Flex direction={"row"} alignItems={"center"}>
                  <Box>
                    <Image
                      src="/bchatLanding.png"
                      borderRadius={10}
                      my={4}
                      w={"lg"}
                    />
                  </Box>
                  <Box ml={8}>
                    <Flex direction={"column"}>
                      <Box mb={4}>
                        <Heading as="h2" fontSize={"2xl"}>
                          bchat
                        </Heading>
                        <Text maxW={"lg"}>
                          this is a webapp for students to share their class
                          notes and study guides. made during buildspace n&w s5!
                        </Text>
                      </Box>
                      <Link href={"https://bchat-v2.netlify.app/"} isExternal>
                        check it out! <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Flex>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>box</TabPanel>
              <TabPanel>box</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Show>
      <Show below="md">to be made</Show>
    </>
  );
};

export default Projects;
