import React from "react";

const Header = () => {
  return (
    <header style={styles.headerStyle}>
      <div style={styles.cropContainerStyle}>
        <img
          style={styles.imageStyle}
          src="https://fontmeme.com/permalink/200108/b0db4ffa47b7c1754a977d389ee99a76.png"
          alt="star-wars-font"
          border="0"
        />
      </div>
    </header>
  );
};

const styles = {
  headerStyle: {
    background: "rgba(0, 0, 0, 0.8)",
    color: "color"
  },
  imageStyle: {
    height: "100px",
    margin: "-29px 0px 0px -28px"
  },
  cropContainerStyle: {
    width: "356px",
    height: "43px",
    overflow: "hidden",
    border: "5px solid black",
    margin: "0 auto"
  }
};

export default Header;
