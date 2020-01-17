import React from "react";
import { typeResolver } from "../util/queryResolver";
import Loading from "./Loading";

const dataInteration = (data, type) => {
    console.log(data);
    console.log(type);
  return data ? typeResolver(type, data) : null;
};

const Display = props => {
  if (props.error) return <div>Error: {props.error}</div>;
  if (props.loading) return <Loading />;
  if(props.data)  {
      return (
        <div style={{ color: "white", border: "1px solid pink", display: "flex", flexWrap: "wrap" }}>
          {dataInteration(props.data, props.type)}
        </div>
      );
  } else {
      return null;
  }
};

export default Display;
