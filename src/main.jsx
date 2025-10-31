import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//
// import "./index.css";
// import App from "./App.jsx";
// import { ChakraProvider } from "@chakra-ui/react";
// import ErrorBoundary from "./ErrorBoundary";
// import ReactDOM from "react-dom/client"; // Import ReactDOM

// ReactDOM.createRoot(document.getElementById("root")).render(
//
//     <ChakraProvider>
//       <ErrorBoundary>
//         <App />
//       </ErrorBoundary>
//     </ChakraProvider>
//
// );
