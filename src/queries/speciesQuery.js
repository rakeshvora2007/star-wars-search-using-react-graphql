import { gql } from "@apollo/client";

export const ALL_SPECIES = gql`
  {
  allSpecies {
    species {
          id
          name
          classification
          designation
          averageHeight
          averageLifespan
          eyeColors
          hairColors
          skinColors
          language
          homeworld {
            name
            
          }
        }
  }
}
`;