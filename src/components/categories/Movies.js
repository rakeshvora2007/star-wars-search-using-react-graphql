import React from "react";

const Movies = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data && data.allFilms &&
        data.allFilms.films.map((curr, idx) => (
          <div key={curr.id} style={styles.movieItem}>
            <p>
              {curr.title}: {curr.episodeID}
            </p>
          </div>
        ))}
    </div>
  );
};

const styles = {
  movieItem: {
    border: "1px solid white"
  }
};

export { Movies };
