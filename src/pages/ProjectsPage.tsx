import Navbar from "../components/Navbar";

// chakra
import { Show, VStack } from "@chakra-ui/react";

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
      <Show above="md">to be made</Show>
      <Show below="md">to be made</Show>
    </>
  );
};

export default Projects;
