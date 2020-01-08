import React from "react";
import Movies from "./components/Movies";
import Species from "./components/Species";
import People from "./components/People";
import Planets from "./components/Planets";


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
    <div style={styles.menuStyles}>
      <Movies />
      <Species />
      <People />
      <Planets />
    </div>
  );
}

const styles = {
  menuStyles : {
    display: "flex"
  }
}



export default App;
