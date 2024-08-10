import Navbar from "../components/Navbar";

// chakra
import {
  VStack,
  Heading,
  Text,
  Box,
  Button,
  Show,
  Flex,
  Grid,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

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
  return (
    <>
      <Show above="md">
        <Box w={"2xl"}>
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* header */}
              <Heading mb={4}>hi, i'm jullian</Heading>
              <Text>
                i'm a self-proclaimed front-end web developer and graphic
                designer. i have worked as an IT technician at bergenfield high
                school and for{" "}
                <Button size={"xs"} mr={1} px={2} display={"inline"}>
                  <a href="https://fiveable.me/" target="_blank">
                    fiveable
                  </a>
                </Button>
                as a "cram" slide designer. currently, i'm building benkyoo, a
                platform for students to share their class-notes and study
                guides. i recently went to san francisco, california, to
                <Button size={"xs"} mx={1} px={2} display={"inline"}>
                  <a href="https://buildspace.so/" target="_blank">
                    buildspace
                  </a>
                </Button>
                irl, to work on and showcase my project.
              </Text>
            </Box>
            <Box my={4}>
              {/* work */}
              <Alert status="success" borderRadius={10}>
                <AlertIcon />
                <AlertTitle>lf job</AlertTitle>
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
                <Box gridArea={"img1"}>
                  <Image
                    src={"/pic1.png"}
                    objectFit={"cover"}
                    borderRadius={10}
                    h={"100%"}
                  />
                </Box>
                <Box gridArea={"img2"}>
                  <Image src={"/pic2.png"} borderRadius={10} />
                </Box>
                <Box gridArea={"img3"}>
                  <Image src={"/pic3.png"} borderRadius={10} />
                </Box>
                <Box gridArea={"img4"}>
                  <Image src={"/pic4.png"} borderRadius={10} />
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Show>
      <Show below="md">
        <Box w={"90%"}>
          <Flex direction={"column"} p={3}>
            <Box mb={4}>
              {/* header */}
              <Heading mb={4}>hi, i'm jullian</Heading>
              <Text>
                i'm a self-proclaimed front-end web developer and graphic
                designer. i have worked as an IT technician at bergenfield high
                school and for{" "}
                <Button size={"xs"} mr={1} px={2} display={"inline"}>
                  <a href="https://fiveable.me/" target="_blank">
                    fiveable
                  </a>
                </Button>
                as a "cram" slide designer. currently, i'm building benkyoo, a
                platform for students to share their class-notes and study
                guides. i recently went to san francisco, california, to
                <Button size={"xs"} mx={1} px={2} display={"inline"}>
                  <a href="https://buildspace.so/" target="_blank">
                    buildspace
                  </a>
                </Button>
                irl, to work on and showcase my project.
              </Text>
            </Box>
            <Box my={4}>
              {/* work */}
              <Alert status="success" borderRadius={10}>
                <AlertIcon />
                <AlertTitle>lf job</AlertTitle>
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
                <Box gridArea={"img1"}>
                  <Image
                    src={"/pic1.png"}
                    objectFit={"cover"}
                    borderRadius={10}
                    h={"100%"}
                  />
                </Box>
                <Box gridArea={"img2"}>
                  <Image src={"/pic2.png"} borderRadius={10} />
                </Box>
                <Box gridArea={"img3"}>
                  <Image src={"/pic3.png"} borderRadius={10} />
                </Box>
                <Box gridArea={"img4"}>
                  <Image src={"/pic4.png"} borderRadius={10} />
                </Box>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Show>
    </>
  );
};

export default Landing;
