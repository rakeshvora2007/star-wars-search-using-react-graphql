import { useLazyQuery } from "@apollo/client";
import * as query from "../queries";

const queryResolver = id => {
  return id ? _querySelector(id) : null;
};

const _querySelector = value => {
  switch (value) {
    case "movies":
      return query.ALL_FILMS;
    case "people":
      return query.ALL_PEOPLE;
    case "species":
      return query.ALL_SPECIES;
    case "planets":
      return query.ALL_PLANETS;
    default:
      return null;
  }
};

const _name = value => {
  switch (value) {
    case "all":
      return query.ALL_FILMS;
    case "people":
      return query.ALL_PEOPLE;
    case "species":
      return query.ALL_SPECIES;
    case "planets":
      return query.ALL_PLANETS;
    default:
      return null;
  }
};

export default queryResolver;
