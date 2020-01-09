import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/Starjedi.ttf";
import App from "./App";
import {ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://swapi-graphql-ramtoo.herokuapp.com/",
    // uri: "https://swapi-graphql.netlify.com/.netlify/functions/index"
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
