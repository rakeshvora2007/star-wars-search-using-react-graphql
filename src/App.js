import React from "react";
import Movies from "./components/Movies";
import Species from "./components/Species";
import People from "./components/People";
import Planets from "./components/Planets";
import Header from "./components/Header";
import Display from "./components/Display";

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

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={styles.menuStyles}>
        <Movies styles={styles}/>
        <Species styles={styles}/>
        <People styles={styles}/>
        <Planets styles={styles}/>
      </div>
      <div>
        <Display />
      </div>
    </div>
  );
}

const styles = {
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
    width: "150px",
    background: "rgb(231, 236, 242)",
    color: "black",
    boxShadow: "0px 0px 36px 12px #277edd",
    borderRadius: "10px",
    border: "0px",
    fontFamily: "starWarsJholFont",
    fontSize: "24px",
    fontWeight: "bold"
  },
  onHoverButtonStyle: {
    height: "50px",
    width: "150px",
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
