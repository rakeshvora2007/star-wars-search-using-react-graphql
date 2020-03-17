import React from "react";

const Species = ({ data }) => {
  console.log(data);
  return (
    <>
      {data &&
        data.allSpecies &&
        data.allSpecies.species.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItems}>
            <p>
              <div style={styles.headerStyles}>{curr.name}</div>
              <div>Designation: {curr.designation}</div>
              <div>Classification: {curr.classification}</div>
              <div>Language: {curr.language}</div>
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
  },
  headerStyles: {
    fontSize: "24px",
    borderBottom: "3px solid #c78455"
  }
}

export { Species };
