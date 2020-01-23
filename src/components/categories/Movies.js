import React from "react";

const Movies = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && data.allFilms &&
        data.allFilms.films.map((curr, idx) => (
          <div key={curr.id} style={styles.movieItem  }>
            <p>
              {curr.title}
            </p>
          </div>
        ))}
    </>
  );
};

const styles = {
  movieItem: {
    border: "10px solid #552f7b",
    padding: "10px",
    margin: "10px",
    fontSize: "24px",
    fontFamily: "starWarsFont",
    background: "rebeccapurple",
    borderRadius: "10px"
  }
};

export { Movies };
