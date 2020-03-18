import { gql } from "@apollo/client";

export const ALL_PEOPLE = gql`
  {
  allPeople {
    people {
      id
      name
      eyeColor
      hairColor
      skinColor
      height
      gender
    }
  }
}
`;