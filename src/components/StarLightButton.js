import React, { useState } from "react";

const StarLightButton = (props) => {
  const [currentStyle, setCurrentStyle] = useState(styles.defaultButtonStyle);


  const onButtonHover = () => {
    setCurrentStyle(styles.onHoverButtonStyle);
  }

  const onButtonOut = () => {
    setCurrentStyle(styles.defaultButtonStyle);
  }

  const handleClick = (e) => {
    if(props.onClick) {
      props.onClick(e.target.id)
    }
  }

  return (
    <div>
      <button id={props.id} onClick={(e) => handleClick(e)} style={currentStyle} onMouseOver={() => onButtonHover()} onMouseOut= {() => onButtonOut()}>
        {props.name ? props.name : "Star Wars Light"}
      </button>
    </div>
  );
};

const styles = {
  defaultButtonStyle: {
    height: "50px",
    background: "rgb(231, 236, 242)",
    color: "black",
    boxShadow: "0px 0px 36px 12px #277edd",
    borderRadius: "10px",
    border: "0px",
    fontFamily: "starWarsFont",
    fontSize: "24px",
    fontWeight: "bold"
  },
  onHoverButtonStyle: {
    height: "50px",
    background: "rgb(253, 238, 231)",
    color: "black",
    boxShadow: "00px 0px 36px 12px #ef3125",
    borderRadius: "10px",
    border: "0px",
    fontFamily: "starWarsJholFont",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer"
  }
}

export default StarLightButton;
