import { ALL_PLANETS } from "../queries/planetsQuery";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const Planets = () => {
  const [getPlanets, { loading, data }] = useLazyQuery(ALL_PLANETS);
  if (loading) return <p>Loading...</p>;
  if (data) console.log(data);
  return (
    <div>
      <button onClick={() => getPlanets()} style={styles.buttonStyle}>
        Planets
      </button>
      <div style={styles.menuStyle}>
        {data &&
            data.allPlanets.planets.map((curr, idx) => (
              <div key={curr.id}>
                <p>
                  {curr.name}
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

export default Planets;
