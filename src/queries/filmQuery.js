import { gql } from "@apollo/client";

export const ALL_FILMS = gql`
  {
    allFilms {
      films {
        id
        title
        episodeID
        releaseDate
        created
        openingCrawl
        producers
        director
      }
    }
  }
`;