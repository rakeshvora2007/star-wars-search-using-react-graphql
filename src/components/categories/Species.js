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
    border: "10px solid #d1471c",
    padding: "10px 20px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "#FF5722",
    borderRadius: "10px",
    color: "black"
  }
}

export { Species };
