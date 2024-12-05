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

  const property = {
    jobs: {
      job1: "Bergenfield High School",
      job2: "Fiveable",
    },
    subheader: {
      job1: "Cram Slide Designer, 2024",
      job2: "IT Technician, 2023",
    },
    description: {
      job1: `As an IT Technician at Bergenfield High School during the summer
                of 2023, I refurbished classrooms and cleaned senior laptops for
                reuse by incoming freshmen. I helped install access points,
                managed tech inventory, and created a Google Sheets system to
                track and manage equipment, including repairs and replacements.
                I also organized and cleaned old tech items like patch wires,
                monitors, and printers.`,
      job2: `As a Cram Slide Designer at Fiveable during the AP exam season,
                I created detailed slides on AP Calculus topics, collaborating
                closely with another designer to ensure cohesive content. I
                communicated with supervisors and peers via Slack, and attended
                meetings to discuss goals, address issues, manage workload, and
                resolve scheduling conflicts.`,
    },
  };

  return (
    <>
      <Show above="md">
        <Box w="2xl">
          <Box my={4}>
            <Box mb={2}>
              <Heading>{property.jobs.job2}</Heading>
              <Text color={"gray"}>{property.subheader.job2}</Text>
            </Box>
            <Box mb={4}>
              <Text>{property.description.job2}</Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://fiveable.me/" isExternal>
                {property.jobs.job2}
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box my={4}>
            <Box mb={2}>
              <Heading>{property.jobs.job1}</Heading>
              <Text color={"gray"}>{property.subheader.job1}</Text>
            </Box>
            <Box mb={4}>
              <Text>{property.description.job1}</Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://bhs.bergenfield.org/" isExternal>
                {property.jobs.job1}
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
              <Heading>{property.jobs.job2}</Heading>
              <Text color={"gray"}>{property.subheader.job2}</Text>
            </Box>
            <Box mb={4}>
              <Text>{property.description.job2}</Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://fiveable.me/" isExternal>
                {property.jobs.job2}
                <ExternalLinkIcon mx={2} />
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box my={4}>
            <Box mb={2}>
              <Heading>{property.jobs.job1}</Heading>
              <Text color={"gray"}>{property.subheader.job1}</Text>
            </Box>
            <Box mb={4}>
              <Text>{property.description.job1}</Text>
            </Box>
            <Box
              borderWidth={1}
              borderRadius={10}
              p={4}
              bg={colorMode === "light" ? "gray.50" : "#292929"}
            >
              <Link href="https://bhs.bergenfield.org/" isExternal>
                {property.description.job1}
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
