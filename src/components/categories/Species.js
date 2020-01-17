import React from "react";

const Species = ({ data }) => {
  return (
    <>
      {data &&
        data.allSpecies &&
        data.allSpecies.species.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItems}>
            <p>
              {curr.name}: {curr.designation}
            </p>
          </div>
        ))}
    </>
  );
};

const styles = {
  menuItems: {
    border: "1px solid pink"
  }
}

export { Species };
