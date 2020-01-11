import React from "react";

const Species = ({ data }) => {
  return (
    <div>
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
  );
};

export { Species };
