import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
