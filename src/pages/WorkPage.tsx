import { ExternalLinkIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";

import {
  Box,
  Heading,
  Show,
  VStack,
  Text,
  Link,
  useColorMode,
  Divider,
} from "@chakra-ui/react";

function Work() {
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
        <Box w="2xl">
          <Box my={4}>
            <Box mb={2}>
              <Heading>Fiveable</Heading>
              <Text color={"gray"}>Cram Slide Designer, 2024</Text>
            </Box>
            <Box mb={4}>
              <Text>
                As a Cram Slide Designer at Fiveable during the AP exam season,
                I created detailed slides on AP Calculus topics, collaborating
                closely with another designer to ensure cohesive content. I
                communicated with supervisors and peers via Slack, and attended
                meetings to discuss goals, address issues, manage workload, and
                resolve scheduling conflicts.
              </Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://fiveable.me/" isExternal>
                Fiveable
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box my={4}>
            <Box mb={2}>
              <Heading>Bergenfield High School</Heading>
              <Text color={"gray"}>IT Technician, 2023</Text>
            </Box>
            <Box mb={4}>
              <Text>
                As an IT Technician at Bergenfield High School during the summer
                of 2023, I refurbished classrooms and cleaned senior laptops for
                reuse by incoming freshmen. I helped install access points,
                managed tech inventory, and created a Google Sheets system to
                track and manage equipment, including repairs and replacements.
                I also organized and cleaned old tech items like patch wires,
                monitors, and printers.
              </Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://bhs.bergenfield.org/" isExternal>
                Bergenfield High School
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Show>
      <Show below="md">
        <Box w="90%">
          <Box my={4}>
            <Box mb={2}>
              <Heading>Fiveable</Heading>
              <Text color={"gray"}>Cram Slide Designer, 2024</Text>
            </Box>
            <Box mb={4}>
              <Text>
                As a Cram Slide Designer at Fiveable during the AP exam season,
                I created detailed slides on AP Calculus topics, collaborating
                closely with another designer to ensure cohesive content. I
                communicated with supervisors and peers via Slack, and attended
                meetings to discuss goals, address issues, manage workload, and
                resolve scheduling conflicts.
              </Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://fiveable.me/" isExternal>
                Fiveable
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box my={4}>
            <Box mb={2}>
              <Heading>Bergenfield High School</Heading>
              <Text color={"gray"}>IT Technician, 2023</Text>
            </Box>
            <Box mb={4}>
              <Text>
                As an IT Technician at Bergenfield High School during the summer
                of 2023, I refurbished classrooms and cleaned senior laptops for
                reuse by incoming freshmen. I helped install access points,
                managed tech inventory, and created a Google Sheets system to
                track and manage equipment, including repairs and replacements.
                I also organized and cleaned old tech items like patch wires,
                monitors, and printers.
              </Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://bhs.bergenfield.org/" isExternal>
                Bergenfield High School
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Show>
    </>
  );
};

export default Work;
