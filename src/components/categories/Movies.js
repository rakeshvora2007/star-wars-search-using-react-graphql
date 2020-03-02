import React from "react";

const Movies = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && data.allFilms &&
        data.allFilms.films.map((curr, idx) => (
          <div key={curr.id} style={styles.movieItem }>
            <div style={styles.titleStyle}>
              {curr.title}
            </div>
            <div>
              {curr.episodeID}
              {curr.releaseDate}
              {curr.director}
              {curr.producers.map((producer,idx) => {
                return <div key={idx}>{producer}</div>
              })}
            </div>
          </div>
        ))}
    </>
  );
};

const styles = {
  titleStyle: {
    borderBottom: "1px solid black"
  },
  movieItem: {
    border: "10px solid #27c2ac",
    padding: "10px 20px",
    margin: "10px",
    fontSize: "24px",
    fontFamily: "starWarsFont",
    background: "#45d2be",
    borderRadius: "10px",
    color: "black"
  }
};

export { Movies };
