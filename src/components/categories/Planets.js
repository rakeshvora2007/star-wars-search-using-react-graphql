import React from "react";

const Planets = ({ data }) => {
  return (
    <div>
      {data && data.allPlanets &&
        data.allPlanets.planets.map((curr, idx) => (
          <div key={curr.id}>
            <p>{curr.name}</p>
          </div>
        ))}
    </div>
  );
};

export { Planets };
