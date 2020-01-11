import React from 'react'
import { useLazyQuery } from "@apollo/client";
import Movies from "../components/Movies";

const dataInteration = (data) => {
    /* return data ? 
     data.allFilms.films.map((curr, idx) => {
         console.log(curr, idx);
     }) : null; */
     return <Movies data={data}/>
}

const Display = (props) => {
    if(props.error) return <div>Error: {props.error}</div>;
    if(props.loading) return <div>loading...</div>;
    // if(props.data) console.log(props.data);
    return (
        <div style={{color: "white", border: "1px solid pink"}}>
            {dataInteration(props.data)}
        </div>
    )
}

export default Display
