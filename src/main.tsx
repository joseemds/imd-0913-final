import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { Root, Auction } from "./routes";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import auctions from "./data";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";


const getLibrary = (provider) => {
  return new Web3(provider)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auction/:auction_id",
    element: <Auction />,
    loader: async ({ params }) => {
      const id = params["auction_id"] as string;
      return json(auctions[parseInt(id)]);
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <RouterProvider router={router} />
      </Web3ReactProvider>
    </ChakraProvider>
  </React.StrictMode>
);
