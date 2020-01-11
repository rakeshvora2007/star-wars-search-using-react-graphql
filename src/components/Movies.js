import { ALL_FILMS } from "../queries/filmQuery";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const Movies = ({data}) => {
  return (
    <div>
      <div>
        {data &&
            data.allFilms.films.map((curr, idx) => (
              <div key={curr.id}>
                <p>
                  {curr.title}: {curr.episodeID}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Movies;
