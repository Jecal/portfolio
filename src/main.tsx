import { StrictMode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme";

// pages
import Error from "./pages/ErrorPage";
import Landing from "./pages/LandingPage";
import Projects from "./pages/ProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
