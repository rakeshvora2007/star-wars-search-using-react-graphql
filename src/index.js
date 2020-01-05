import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://graphql.org/swapi-graphql"
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
