import React from "react";

const Planets = ({ data }) => {
  return (
    <>
      {data && data.allPlanets &&
        data.allPlanets.planets.map((curr, idx) => (
          <div key={curr.id}>
            <p>{curr.name}</p>
          </div>
        ))}
    </>
  );
};

export { Planets };
