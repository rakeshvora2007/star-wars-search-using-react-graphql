import React from "react";
import Movies from "./components/Movies";
import Species from "./components/Species";
import People from "./components/People";
import Planets from "./components/Planets";
import Header from "./components/Header";
import Display from "./components/Display";
import StarLightButton from "./components/StarLightButton";

// For you dhaval: vanilla fetch works with graphql, this is an example
/* fetch("https://swapi-graphql-ramtoo.herokuapp.com/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: `{
  allFilms {
    films {
      id
      title
      episodeID
      releaseDate
      created
    }
  }
}`
  })
})
  .then(res => res.json())
  .then(res => console.log(res.data)); */



const App = () => {
  const handleClick = () => {
    console.log("handle click")
  }
  return (
    <div>
      <Header />
      <div style={styles.mainScreenStyles}>
        <div style={styles.menuStyles}>
          <StarLightButton styles={styles} name="Movies" onClick={handleClick}/>
          <StarLightButton styles={styles} name="Species"/>
          <StarLightButton styles={styles} name="People"/>
          <StarLightButton styles={styles} name="Planets"/>
          <Movies styles={styles} />
        </div>
        <div>
          <Display />
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainScreenStyles: {
    display: "flex",
    flexDirection: "column"
  },
  menuStyles: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "50px"
  },
  menuItemsStyles: {
    color: "white"
  },
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
    fontWeight: "bold"
  }
};

export default App;
