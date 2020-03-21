import React from "react";

const Planets = ({ data }) => {
  console.log(data)
  return (
    <>
      {data && data.allPlanets &&
        data.allPlanets.planets.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItems}>
            <div style={styles.headerStyles}>{curr.name}</div>
            <div>Diameter: {curr.diameter}</div>
            <div>Population: {curr.population}</div>
            <div>Rotation Period: {curr.rotationPeriod}</div>
            <div>
              Climates: 
              {curr.climates.map((climate, idx) => {
                return <span key={idx}> {climate} | </span>
              })}
            </div>
            <div>
              Terrains: 
              {curr.terrains.map((terrain, idx) => {
                return <span key={idx}>{terrain} | </span>
              })}
            </div>
          </div>
        ))}
    </>
  );
};

const styles = {
  menuItems: {
    border: "10px solid #552f7b",
    padding: "10px 20px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "rebeccapurple",
    borderRadius: "10px"
  },
  headerStyles: {
    fontSize: "24px",
    borderBottom: "3px solid #6c55c7"
  },
}

export { Planets };
