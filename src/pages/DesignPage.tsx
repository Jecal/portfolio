import { ExternalLinkIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";

import {
  VStack,
  Show,
  Heading,
  Box,
  Flex,
  Text,
  Image,
  Badge,
  Link,
} from "@chakra-ui/react";

function Design() {
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
  return (
    <>
      <Show above="md">
        <Box w="2xl">
          <Flex direction={"column"} p={3}>
            <Box mb="4">
              <Heading>portfolio</Heading>
            </Box>
            <Box my={4}>
              <Flex direction={"column"}>
                <Box mb={2}>
                  <Heading as="h2" size="lg">
                    tryout announcements
                  </Heading>
                  <Flex direction={"row"} my={2}>
                    <Badge colorScheme="red" mr={2}>
                      Illustrator
                    </Badge>
                  </Flex>
                  <Text maxW={"full"}>
                    these posters were made to put around my school so we could
                    advertise tryouts for our two main pc teams for my high
                    school esports org.
                  </Text>
                </Box>
                <Link href={"/overwatch-tryout.png"} isExternal>
                  overwatch tryouts
                  <ExternalLinkIcon mx="2px" />
                </Link>
                <Link href={"/valorant-tryout.png"} isExternal>
                  valorant tryouts
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Flex>
              <Box w="full" justifyContent="center">
                <Flex direction="row" w="full" justify="space-between">
                  <Image
                    src="/overwatch-tryout.png"
                    borderRadius={10}
                    my={4}
                    w="calc(50% - 8px)"
                    loading="lazy"
                  />
                  <Image
                    src="/valorant-tryout.png"
                    borderRadius={10}
                    my={4}
                    w="calc(50% - 8px)"
                    loading="lazy"
                  />
                </Flex>
              </Box>
            </Box>
            <Box my={4}>
              <Flex direction={"column"}>
                <Box mb={2}>
                  <Heading as="h2" size="lg">
                    club day posters
                  </Heading>
                  <Flex direction={"row"} my={2}>
                    <Badge colorScheme="red" mr={2}>
                      Illustrator
                    </Badge>
                  </Flex>
                  <Text maxW={"full"}>
                    we used these posters on a trifold to showcase the games
                    which we had a team for in our org.
                  </Text>
                </Box>
                <Link href={"/triad1.png"} isExternal>
                  val poster
                  <ExternalLinkIcon mx="2px" />
                </Link>
                <Link href={"/triad2.png"} isExternal>
                  fortnite poster
                  <ExternalLinkIcon mx="2px" />
                </Link>
                <Link href={"/triad3.png"} isExternal>
                  lft poster
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Flex>
              <Box w="full" justifyContent="center">
                <Flex direction="row" w="full" justify="space-between">
                  <Image
                    src="/triad1.png"
                    borderRadius={10}
                    my={4}
                    w="calc(33% - 8px)"
                    loading="lazy"
                  />
                  <Image
                    src="/triad2.png"
                    borderRadius={10}
                    my={4}
                    w="calc(33% - 8px)"
                    loading="lazy"
                  />
                  <Image
                    src="/triad3.png"
                    borderRadius={10}
                    my={4}
                    w="calc(33% - 8px)"
                    loading="lazy"
                  />
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Show>
      {/* mobile */}
      <Show below="md"></Show>
    </>
  );
};

export default Design;
