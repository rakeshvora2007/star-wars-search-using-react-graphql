import React from "react";

const People = ({ data }) => {
  console.log(data);
  return (
    <>
      {data &&
        data.allPeople &&
        data.allPeople.people.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItem}>
            <div style={styles.headerStyles}>{curr.name}</div>
            <div>Gender: {curr.gender}</div>
            <div>Height: {curr.height} cm</div>
            <div style={{display: "flex"}}><div>Eye Color: </div>{eyeColorDisplay(curr.eyeColor)}</div>
          </div>
        ))}
    </>
  );
};

const styles = {
  menuItem: {
    border: "10px solid #0c0b53",
    padding: "10px 20px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "#161555",
    borderRadius: "10px"
  },
  headerStyles: {
    fontSize: "24px",
    borderBottom: "3px solid #6c55c7"
  },
  colorStyles: {
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    padding: "5px",
    margin: "2px",
  }
};

const checkColorValidity = color => {
  let CSS_STYLE = new Option().style;
  CSS_STYLE.color = color;
  return CSS_STYLE.color === color;
};

const colorStyler = color => {
  return {
    ...styles.colorStyles,
    background: color
  };
};

const eyeColorDisplay = color => {
  return color === "n/a" || color[0] === "unknown" ? (
    "N/A"
  ) : checkColorValidity(color) === true ? (
    <div
      style={colorStyler(color)}
      key={color + Number.parseInt(Math.random() * 10000000)}
    ></div>
  ) : null;
};

export { People };
