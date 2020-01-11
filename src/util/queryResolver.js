import * as query from "../queries";
import React from "react";
import { Movies, People, Planets, Species } from "../components/categories";

export const queryResolver = id => {
  return id ? _querySelector(id) : null;
};

const _querySelector = value => {
  switch (value) {
    case "movies":
      return query.ALL_FILMS;
    case "people":
      return query.ALL_PEOPLE;
    case "planets":
      return query.ALL_PLANETS;
    case "species":
      return query.ALL_SPECIES;
    default:
      return null;
  }
};

export const typeResolver = (value, data) => {
  switch (value) {
    case "movies":
      return <Movies data={data} />;
    case "people":
      return <People data={data} />;
    case "planets":
      return <Planets data={data} />;
    case "species":
      return <Species data={data} />;
    default:
      return null;
  }
};
