import React from "react";

const Planets = ({ data }) => {
  return (
    <>
      {data && data.allPlanets &&
        data.allPlanets.planets.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItems}>
            <p>{curr.name}</p>
          </div>
        ))}
    </>
  );
};

const styles = {
  menuItems: {
    border: "10px solid #552f7b",
    padding: "10px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "rebeccapurple",
    borderRadius: "10px"
  }
}

export { Planets };
