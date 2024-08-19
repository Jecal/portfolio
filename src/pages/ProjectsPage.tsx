import Navbar from "../components/Navbar";

// chakra
import {
  Show,
  VStack,
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Link,
  Divider,
  Badge,
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
  return (
    <>
      <Show above="md">
        <Box w={"2xl"}>
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* web dev */}
              <Heading as="h2" size="lg">
                web dev
              </Heading>
              <Flex direction={"row"} alignItems={"center"}>
                <Box>
                  <Image
                    src="/benkyooLanding.png"
                    border="1px solid"
                    borderColor={"gray.100"}
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
                      <Flex direction={"row"} my={1}>
                        <Badge colorScheme={"yellow"} mr={2}>
                          React + Vite
                        </Badge>
                        <Badge colorScheme={"blue"} mr={2}>
                          Chakra
                        </Badge>
                        <Badge colorScheme="orange" mr={2}>
                          Firebase
                        </Badge>
                      </Flex>
                      <Text maxW={"lg"}>
                        this is a webapp for students to share their class notes
                        and study guides. made during buildspace n&w s5!
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
                      <Flex direction={"row"} my={1}>
                        <Badge colorScheme={"blue"} mr={2}>
                          React
                        </Badge>
                        <Badge colorScheme={"purple"} mr={2}>
                          Bootstrap
                        </Badge>
                        <Badge colorScheme="orange" mr={2}>
                          Firebase
                        </Badge>
                      </Flex>
                      <Text maxW={"lg"}>
                        this is a webapp i made to learn how to work with front
                        end styling kits and google firebase. first web dev
                        project!
                      </Text>
                    </Box>
                    <Link href={"https://bchat-v2.netlify.app/"} isExternal>
                      check it out! <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Divider />
            <Box my={4}>
              {/* graphic design */}
              <Heading as="h2" size="lg">
                graphic design
              </Heading>
              <Box my={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        bears esports ad
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="red" mr={2}>
                          Illustrator
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        these are some posters i made for the esports club at my
                        hs to advertise the next running year, and how we're
                        looking for players.
                      </Text>
                    </Box>
                    <Link href={"/esports-ad1.png"} isExternal>
                      overwatch ad
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Link href={"/esports-ad2.png"} isExternal>
                      valorant ad
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justify="space-between">
                    <Image
                      src="/esports-ad1.png"
                      borderRadius={10}
                      my={4}
                      w="calc(50% - 8px)"
                    />
                    <Image
                      src="/esports-ad2.png"
                      borderRadius={10}
                      my={4}
                      w="calc(50% - 8px)"
                    />
                  </Flex>
                </Box>
              </Box>
              <Box my={2}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        bears esports player banner
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="blue" mr={2}>
                          Photoshop
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        this was a example player banner i made for my hs
                        esports club. i used a picture of faker bc we didn't
                        have actual player headshots.
                      </Text>
                    </Box>
                    <Link href={"/playerbanner1.png"} isExternal>
                      player banner
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justify="space-between">
                    <Image
                      src="/playerbanner1.png"
                      borderRadius={10}
                      my={4}
                      w="calc(100%)"
                    />
                  </Flex>
                </Box>
              </Box>
              <Box mt={2}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        waters of kanagawa
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="blue" mr={2}>
                          Photoshop
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        poster i made to learn some basic photoshop skills.
                      </Text>
                    </Box>
                    <Link href={"/watersofkanagawa.png"} isExternal>
                      poster
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justify="center">
                    <Image
                      src="/watersofkanagawa.png"
                      borderRadius={10}
                      my={4}
                      w="calc(50%)"
                    />
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box my={4}>
              {/* video editing */}
              <Heading as="h2" size="lg">
                video editing
              </Heading>
              <Box mt={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        benkyoo demo vid
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="green" mr={2}>
                          Video
                        </Badge>
                        <Badge colorScheme="pink" mr={2}>
                          Premiere Pro
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        i made this video during buildspace's nights and
                        weekends s5 on week 6, in order to demo my product,
                        benkyoo.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Box
                    as="div"
                    position="relative"
                    paddingBottom="56.25%" // 16:9 aspect ratio
                    height="0"
                    overflow="hidden"
                    maxWidth="100%"
                    bg="black"
                    borderRadius="md"
                    boxShadow="lg"
                  >
                    <Box
                      as="iframe"
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/6DFaMuIWYwE"
                      allowFullScreen
                      borderRadius="md"
                    />
                  </Box>
                </Box>
              </Box>
              <Box mt={4}>
                <Box my={8}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        benkyoo insta reels
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="red" mr={2}>
                          Reel
                        </Badge>
                        <Badge colorScheme="pink" mr={2}>
                          Premiere Pro
                        </Badge>
                      </Flex>
                      <Text maxW={"full"} mb={2}>
                        i made a few reels to advertise benkyoo and a survey.
                        you can click the image to go to my most popular reel.
                      </Text>
                      <Link
                        href={"https://www.instagram.com/jecalll/reels/"}
                        isExternal
                      >
                        insta acc link
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Box>
                  </Flex>
                </Box>
                <a
                  href="https://www.instagram.com/reel/C9vRwA2PbTv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box w="full" display="flex" justifyContent="center">
                    <Image
                      w="50%"
                      src="/surveyreview-thumbnail.png"
                      borderRadius={10}
                    />
                  </Box>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Show>
      {/* moblie */}
      <Show below="md">
        <Box w="90%">
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* web dev */}
              <Heading as="h2" size="lg">
                web dev
              </Heading>
              <Box mt={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        benkyoo
                      </Heading>
                      <Flex direction={"row"} my={1}>
                        <Badge colorScheme={"yellow"} mr={2}>
                          React + Vite
                        </Badge>
                        <Badge colorScheme={"blue"} mr={2}>
                          Chakra
                        </Badge>
                        <Badge colorScheme="orange" mr={2}>
                          Firebase
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        this is a webapp for students to share their class notes
                        and study guides. made during buildspace n&w s5!
                      </Text>
                    </Box>
                    <Link href={"https://benkyoo.netlify.app/"} isExternal>
                      check it out! <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justifyContent="center">
                    <Image
                      src="/benkyooLanding.png"
                      border="1px solid"
                      borderColor={"gray.100"}
                      borderRadius={10}
                      my={4}
                      w={"lg"}
                    />
                  </Flex>
                </Box>
              </Box>
              <Box mt={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        bchat
                      </Heading>
                      <Flex direction={"row"} my={1}>
                        <Badge colorScheme={"blue"} mr={2}>
                          React
                        </Badge>
                        <Badge colorScheme={"purple"} mr={2}>
                          Bootstrap
                        </Badge>
                        <Badge colorScheme="orange" mr={2}>
                          Firebase
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        this is a webapp i made to learn how to work with front
                        end styling kits and google firebase. first web dev
                        project!
                      </Text>
                    </Box>
                    <Link href={"https://bchat-v2.netlify.app/"} isExternal>
                      check it out! <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justifyContent="center">
                    <Image
                      src="/bchatLanding.png"
                      borderRadius={10}
                      my={4}
                      w={"lg"}
                    />
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box my={4}>
              {/* graphic design */}
              <Heading as="h2" size="lg">
                graphic design
              </Heading>
              <Box my={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        bears esports ad
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="red" mr={2}>
                          Illustrator
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        these are some posters i made for the esports club at my
                        hs to advertise the next running year, and how we're
                        looking for players.
                      </Text>
                    </Box>
                    <Link href={"/esports-ad1.png"} isExternal>
                      overwatch ad
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Link href={"/esports-ad2.png"} isExternal>
                      valorant ad
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Image
                    src="/esports-ad1.png"
                    borderRadius={10}
                    my={4}
                    w="calc(100%)"
                  />
                  <Image
                    src="/esports-ad2.png"
                    borderRadius={10}
                    my={4}
                    w="calc(100%)"
                  />
                </Box>
              </Box>
              <Box my={2}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        bears esports player banner
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="blue" mr={2}>
                          Photoshop
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        this was a example player banner i made for my hs
                        esports club. i used a picture of faker bc we didn't
                        have actual player headshots.
                      </Text>
                    </Box>
                    <Link href={"/playerbanner1.png"} isExternal>
                      player banner
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justify="space-between">
                    <Image
                      src="/playerbanner1.png"
                      borderRadius={10}
                      my={4}
                      w="calc(100%)"
                    />
                  </Flex>
                </Box>
              </Box>
              <Box mt={2}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        waters of kanagawa
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="blue" mr={2}>
                          Photoshop
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        poster i made to learn some basic photoshop skills.
                      </Text>
                    </Box>
                    <Link href={"/watersofkanagawa.png"} isExternal>
                      poster
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Flex direction="row" w="full" justify="center">
                    <Image
                      src="/watersofkanagawa.png"
                      borderRadius={10}
                      my={4}
                      w="calc(100%)"
                    />
                  </Flex>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box my={4}>
              {/* video editing */}
              <Heading as="h2" size="lg">
                video editing
              </Heading>
              <Box mt={4}>
                <Box mb={2}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        benkyoo demo vid
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="green" mr={2}>
                          Video
                        </Badge>
                        <Badge colorScheme="pink" mr={2}>
                          Premiere Pro
                        </Badge>
                      </Flex>
                      <Text maxW={"full"}>
                        i made this video during buildspace's nights and
                        weekends s5 on week 6, in order to demo my product,
                        benkyoo.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box w="full" justifyContent="center">
                  <Box
                    as="div"
                    position="relative"
                    paddingBottom="56.25%" // 16:9 aspect ratio
                    height="0"
                    overflow="hidden"
                    maxWidth="100%"
                    bg="black"
                    borderRadius="md"
                    boxShadow="lg"
                  >
                    <Box
                      as="iframe"
                      position="absolute"
                      top="0"
                      left="0"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/6DFaMuIWYwE"
                      allowFullScreen
                      borderRadius="md"
                    />
                  </Box>
                </Box>
              </Box>
              <Box mt={4}>
                <Box my={8}>
                  <Flex direction={"column"}>
                    <Box mb={2}>
                      <Heading as="h2" fontSize={"2xl"}>
                        benkyoo insta reels
                      </Heading>
                      <Flex direction={"row"} my={2}>
                        <Badge colorScheme="red" mr={2}>
                          Reel
                        </Badge>
                        <Badge colorScheme="pink" mr={2}>
                          Premiere Pro
                        </Badge>
                      </Flex>
                      <Text maxW={"full"} mb={2}>
                        i made a few reels to advertise benkyoo and a survey.
                        you can click the image to go to my most popular reel.
                      </Text>
                      <Link
                        href={"https://www.instagram.com/jecalll/reels/"}
                        isExternal
                      >
                        insta acc link
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </Box>
                  </Flex>
                </Box>
                <a
                  href="https://www.instagram.com/reel/C9vRwA2PbTv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Box w="full" display="flex" justifyContent="center">
                    <Image
                      w="100%"
                      src="/surveyreview-thumbnail.png"
                      borderRadius={10}
                    />
                  </Box>
                </a>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default Projects;
