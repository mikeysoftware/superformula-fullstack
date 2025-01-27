import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// Providers
import ApolloProvider from "./providers/ApolloProvider";
import StyleProvider from "./providers/StyleProvider";
import RouterProvider from "./providers/RouterProvider";

ReactDOM.render(
  <ApolloProvider>
    <React.StrictMode>
      <StyleProvider />
      <RouterProvider />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
