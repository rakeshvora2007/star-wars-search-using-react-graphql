import React, {useState, useEffect} from "react";
import { useLazyQuery } from "@apollo/client"
import Movies from "./components/Movies";
import Header from "./components/Header";
import Display from "./components/Display";
import StarLightButton from "./components/StarLightButton";
import queryResolver from "./util/queryResolver";

const App = () => {
  const [query, setQuery] = useState(null);
  const [runQuery, {loading, error, data}] = useLazyQuery(query);

  const handleClick = (id) => {
    console.log(id)
    setQuery(queryResolver(id));
  }

  useEffect(() => {
    if(query) {
      runQuery(query);
    }
  }, [query])


  return (
    <div>
      <Header />
      <div style={styles.mainScreenStyles}>
        <div style={styles.menuStyles}>
          <StarLightButton name="Movies" onClick={handleClick} id="movies"/>
          <StarLightButton name="Species" onClick={handleClick} id="species"/>
          <StarLightButton name="People" onClick={handleClick} id="people"/>
          <StarLightButton name="Planets" onClick={handleClick} id="planets"/>
        </div>
        <div>
          <Display loading={loading} error={error} data={data}/>
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
  }
};

export default App;
