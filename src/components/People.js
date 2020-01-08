import { ALL_PEOPLE } from "../queries/peopleQuery";
import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";

const People = () => {
  const [getPeople, { loading, data }] = useLazyQuery(ALL_PEOPLE);
  if (loading) return <p>Loading...</p>;
  if (data) console.log(data);
  return (
    <div>
      <button onClick={() => getPeople()} style={styles.buttonStyle}>
        People
      </button>
      <div style={styles.menuStyle}>
        {data &&
            data.allPeople.people.map((curr, idx) => (
              <div key={curr.id}>
                <p>
                  {curr.name}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

const styles = {
    buttonStyle: {
      height: "50px",
      width: "150px",
      background: "rgba(63, 168, 217, 0.5)",
      color: "white",
      borderRadius: "10px",
      border: "0px"
    },
    menuStyle: {
      color: "white"
    }
  };

export default People;