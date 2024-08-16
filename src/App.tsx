import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import theme from "./theme";

import Landing from "./pages/LandingPage";
import Projects from "./pages/ProjectsPage";
import Work from "./pages/WorkPage";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
