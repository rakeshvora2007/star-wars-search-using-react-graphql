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
    border: "10px solid #552f7b",
    padding: "10px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "rebeccapurple",
    borderRadius: "10px"
  }
}

export { Species };
