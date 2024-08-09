import "./App.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import theme from "./theme";

import Landing from "./pages/LandingPage";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          <Route path="/" element={<Landing />} />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
