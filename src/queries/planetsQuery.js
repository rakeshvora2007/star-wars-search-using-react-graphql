import { gql } from "@apollo/client";

export const ALL_PLANETS = gql`
  {
    allPlanets {
      planets {
        id
        name
      }
    }
  }
`;
