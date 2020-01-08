import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { ALL_SPECIES } from "../queries/speciesQuery";

const Species = () => {
  const [getSpecies, { loading: getSpeciesLoading, data }] = useLazyQuery(
    ALL_SPECIES
  );

  return (
    <div>
      <button onClick={() => getSpecies()} style={styles.buttonStyle}>
        Species
      </button>
      <div style={styles.menuStyle}>
        {data &&
          data.allSpecies &&
          data.allSpecies.species.map((curr, idx) => (
            <div key={curr.id}>
              <p>
                {curr.name}: {curr.designation}
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

export default Species;
