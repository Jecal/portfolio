// chakra
import {
  Box,
  Link,
  IconButton,
  Show,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

// router
import { useNavigate } from "react-router-dom";

// images

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const homeNav = () => {
    navigate("/");
  };
  const projectsNav = () => {
    navigate("/projects");
  };

  return (
    <>
      <Show above="md">
        <Box w={"2xl"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            py={3}
          >
            <Box>
              <Link
                px={4}
                _hover={{ textDecoration: "none" }}
                onClick={homeNav}
              >
                home
              </Link>
              <Link
                px={4}
                _hover={{ textDecoration: "none" }}
                onClick={projectsNav}
              >
                projects
              </Link>
            </Box>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant={"ghost"}
              aria-label={"toggle color mode"}
            />
          </Flex>
        </Box>
      </Show>
      <Show below="md">
        <Box w={"90%"}>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            p={3}
          >
            <Box>
              <Link px={4} _hover={{ textDecoration: "none" }}>
                home
              </Link>
              <Link px={4} _hover={{ textDecoration: "none" }}>
                projects
              </Link>
            </Box>
            <IconButton
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant={"ghost"}
              aria-label={"toggle color mode"}
            />
          </Flex>
        </Box>
      </Show>
    </>
  );
}

export default Navbar;
