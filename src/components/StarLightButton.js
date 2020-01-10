import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const StarLightButton = (props) => {
  // const [getFilms, { loading, data }] = useLazyQuery(ALL_FILMS);
  const [currentStyle, setCurrentStyle] = useState(props.styles.defaultButtonStyle);


  const onButtonHover = () => {
    setCurrentStyle(props.styles.onHoverButtonStyle);
  }

  const onButtonOut = () => {
    setCurrentStyle(props.styles.defaultButtonStyle);
  }

  const handleClick = () => {
    console.log("Star button clicked")
    console.log(props.name);
    if(props.onClick) {
      props.onClick()
    }
  }

  return (
    <div>
      <button onClick={() => handleClick()} style={currentStyle} onMouseOver={() => onButtonHover()} onMouseOut= {() => onButtonOut()}>
        {props.name ? props.name : "Star Wars Light"}
      </button>
    </div>
  );
};

export default StarLightButton;
