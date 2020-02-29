import React from "react";
import { typeResolver } from "../util/queryResolver";
import Loading from "./Loading";

const dataInteration = (data, type) => {
  return data ? typeResolver(type, data) : null;
};

const Display = props => {
  if (props.error) return <div>Error: {props.error}</div>;
  if (props.loading) return <Loading />;
  if(props.data)  {
      return (
        <div style={styles.displayStyle}>
          {dataInteration(props.data, props.type)}
        </div>
      );
  } else {
      return null;
  }
};

const styles = {
  displayStyle: {
    color: "white",
    display: "flex", 
    flexWrap: "wrap",
    margin: "60px 50px"
  }
}

export default Display;
