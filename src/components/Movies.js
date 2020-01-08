import { ALL_FILMS } from "../queries/filmQuery";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const Movies = () => {
  const [getFilms, { loading, data }] = useLazyQuery(ALL_FILMS);
  if (loading) return <p>Loading...</p>;
  if (data) console.log(data);
  return (
    <div>
      <button onClick={() => getFilms()} style={styles.buttonStyle}>
        Movies
      </button>
      <div style={styles.menuStyle}>
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

const styles = {
    buttonStyle: {
      height: "50px",
      width: "150px",
      background: "rgba(63, 168, 217, 0.5)",
      color: "white",
      borderRadius: "10px",
      border: "0px"
    },
    menuStyle: {
      color: "white"
    }
  };

export default Movies;
