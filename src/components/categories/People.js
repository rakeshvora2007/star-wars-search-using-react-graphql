import React from "react";

const People = ({ data }) => {
  return (
    <>
      {data && data.allPeople &&
        data.allPeople.people.map((curr, idx) => (
          <div key={curr.id}>
            <p>{curr.name}</p>
          </div>
        ))}
    </>
  );
};

export { People };
