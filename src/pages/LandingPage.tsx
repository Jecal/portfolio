import Navbar from "../components/Navbar";

// chakra
import {
  VStack,
  Heading,
  Text,
  Box,
  Show,
  Flex,
  Grid,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  GridItem,
  useColorMode,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon, SmallAddIcon } from "@chakra-ui/icons";

function Landing() {
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
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* header */}
              <Heading mb={4}>hi, i'm jullian</Heading>
              <Text>
                i'm a 17 yr old self taught front end dev and graphic designer.
                i go by typo, or typoctave online. my front end tools include
                javascript, chakraui, firebase, and vercel. my design tools
                include illustrator, photoshop, and figma. i'm currently
                building benkyoo, a webapp for students to share their study
                guides and class notes.
              </Text>
            </Box>
            <Box my={4}>
              {/* work */}
              <Alert status="success" borderRadius={10}>
                <AlertIcon />
                <AlertTitle>lf work</AlertTitle>
                <AlertDescription>
                  graphic design / front-end web dev
                </AlertDescription>
              </Alert>
            </Box>
            <Box my={4}>
              {/* images */}
              <Grid
                templateColumns={"repeat(2, 1fr)"} // Two columns with equal width
                templateRows={"auto auto auto"} // Two rows with automatic height based on content
                gap={"10px"} // Space between items
                w={"100%"} // Full width of parent
                templateAreas={`
                  "img1 img2"
                  "img1 img4"
                  "img3 img4"
                `}
              >
                <GridItem area={"img1"}>
                  <Image
                    src={"/pic1.png"}
                    borderRadius={10}
                    objectFit={"cover"}
                    boxSize={"100%"}
                  />
                </GridItem>
                <GridItem area={"img2"}>
                  <Image src={"/pic2.png"} borderRadius={10} />
                </GridItem>
                <GridItem area={"img3"}>
                  <Image src={"/pic3.png"} borderRadius={10} />
                </GridItem>
                <GridItem area={"img4"}>
                  <Image src={"/pic4.png"} borderRadius={10} />
                </GridItem>
              </Grid>
            </Box>
            <Box my={4}>
              {/* socials */}
              <Box
                borderWidth={1}
                borderRadius={10}
                p={4}
                mb={4}
                bg={colorMode === "light" ? "gray.50" : "#292929"}
              >
                <Link href={"https://www.instagram.com/jecalll/"} isExternal>
                  my insta
                  <ExternalLinkIcon mx={2} />
                </Link>
              </Box>
              <Box
                borderWidth={1}
                borderRadius={10}
                p={4}
                mt={4}
                bg={colorMode === "light" ? "gray.50" : "#292929"}
              >
                <Link href={"https://x.com/jecalll"} isExternal>
                  my twitter / x
                  <ExternalLinkIcon mx={2} />
                </Link>
              </Box>
            </Box>
            <Box my={4}>
              {/* extra skills */}
              <Heading as="h3" size="md">
                all possibly profitable skills
              </Heading>
              <List spacing={2} my={2}>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  graphic design: illustrator / photoshop
                </ListItem>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  video editing: premiere pro
                </ListItem>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  web development: front-end / ui design
                </ListItem>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  team management: esports
                </ListItem>
              </List>
              <Text as="i">check projects page for references!</Text>
            </Box>
          </Flex>
        </Box>
      </Show>
      {/* mobile */}
      <Show below="md">
        <Box w={"90%"}>
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* header */}
              <Heading mb={4}>hi, i'm jullian</Heading>
              <Text>
                i'm a 17 yr old self taught front end dev and graphic designer.
                i go by typo, or typoctave online. my front end tools include
                javascript, chakraui, firebase, and vercel. my design tools
                include illustrator, photoshop, and figma. i'm currently
                building benkyoo, a webapp for students to share their study
                guides and class notes.
              </Text>
            </Box>
            <Box my={4}>
              {/* work */}
              <Alert status="success" borderRadius={10}>
                <AlertIcon />
                <AlertTitle>lf work</AlertTitle>
                <AlertDescription>graphic design</AlertDescription>
              </Alert>
            </Box>
            <Box my={4}>
              {/* images */}
              <Grid
                templateColumns={"repeat(2, 1fr)"} // Two columns with equal width
                templateRows={"auto auto auto"} // Two rows with automatic height based on content
                gap={"10px"} // Space between items
                w={"100%"} // Full width of parent
                templateAreas={`
                  "img1 img2"
                  "img1 img4"
                  "img3 img4"
                `}
              >
                <GridItem area={"img1"}>
                  <Image
                    src={"/pic1.png"}
                    borderRadius={10}
                    objectFit={"cover"}
                    boxSize={"100%"}
                  />
                </GridItem>
                <GridItem area={"img2"}>
                  <Image src={"/pic2.png"} borderRadius={10} />
                </GridItem>
                <GridItem area={"img3"}>
                  <Image src={"/pic3.png"} borderRadius={10} />
                </GridItem>
                <GridItem area={"img4"}>
                  <Image src={"/pic4.png"} borderRadius={10} />
                </GridItem>
              </Grid>
            </Box>
            <Box my={4}>
              {/* socials */}
              <Box
                borderWidth={1}
                borderRadius={10}
                p={4}
                mb={4}
                bg={colorMode === "light" ? "gray.50" : "#292929"}
              >
                <Link href={"https://www.instagram.com/jecalll/"} isExternal>
                  my insta
                  <ExternalLinkIcon mx={2} />
                </Link>
              </Box>
              <Box
                borderWidth={1}
                borderRadius={10}
                p={4}
                mt={4}
                bg={colorMode === "light" ? "gray.50" : "#292929"}
              >
                <Link href={"https://x.com/jecalll"} isExternal>
                  my twitter / x
                  <ExternalLinkIcon mx={2} />
                </Link>
              </Box>
            </Box>
            <Box my={4}>
              {/* extra skills */}
              <Heading as="h3" size="md">
                all possibly profitable skills
              </Heading>
              <List spacing={2} my={2}>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  graphic design: illustrator / photoshop
                </ListItem>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  video editing: premiere pro
                </ListItem>
                <ListItem>
                  <ListIcon as={SmallAddIcon} />
                  web development: front-end / ui design
                </ListItem>
              </List>
              <Text as="i">check projects page for references!</Text>
            </Box>
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default Landing;
