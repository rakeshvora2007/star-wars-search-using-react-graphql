import { ALL_FILMS } from "../queries/filmQuery";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const Movies = (props) => {
  const [getFilms, { loading, data }] = useLazyQuery(ALL_FILMS);
  const [currentStyle, setCurrentStyle] = useState(props.styles.defaultButtonStyle);


  const onButtonHover = () => {
    setCurrentStyle(props.styles.onHoverButtonStyle);
  }

  const onButtonOut = () => {
    setCurrentStyle(props.styles.defaultButtonStyle);
  }

  // if (loading) return <p>Loading...</p>;
  if (data) console.log(data);
  return (
    <div>
      <button onClick={() => getFilms()} style={currentStyle} onMouseOver={() => onButtonHover()} onMouseOut= {() => onButtonOut()}>
        Movies
      </button>
      {loading ? <p style={{color: "white"}}>Loading...</p> : null}
      <div style={props.styles.menuItemsStyles}>
        {data &&
            data.allFilms.films.map((curr, idx) => (
              <div key={curr.id}>
                <p>
                  {curr.title}: {curr.episodeID}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

/* const styles = {
    ...props.styles
  }; */

export default Movies;
