import React from "react";

const Species = ({ data }) => {
  console.log(data);
  return (
    <>
      {data &&
        data.allSpecies &&
        data.allSpecies.species.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItems}>
            <div style={styles.headerStyles}>{curr.name}</div>
            <div>Designation: {curr.designation}</div>
            <div>Classification: {curr.classification}</div>
            <div>Language: {curr.language}</div>
            <div>Eye Color:</div>
            <div style={styles.eyeColorStyles}>
              {eyeColorDisplay(curr.eyeColors)}
            </div>
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
  },
  eyeColorStyles: {
    background: "white",
    display: "flex",
    justifyContent: "space-evenly"
  },
  colorStyles: {
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    padding: "5px",
    margin: "2px"
  }
};

const checkColorValidity = color => {
  let CSS_STYLE = new Option().style;
  CSS_STYLE.color = color;
  return CSS_STYLE.color === color;
};

const eyeColorIdentifier = color => {
  return {
    ...styles.colorStyles,
    background: color
  };
};

const eyeColorDisplay = colors => {
  return (colors[0] === "n/a" || colors[0] === "unknown")
    ? "N/A"
    : colors.map((color, idx) => {
        return checkColorValidity(color) === true ? (
          <div style={eyeColorIdentifier(color)} key={idx+color+Number.parseInt(Math.random()*10000000)}></div>
        ) : null;
      });
};

export { Species };
