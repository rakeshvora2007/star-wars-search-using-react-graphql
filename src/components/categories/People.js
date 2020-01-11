import React from "react";

const People = ({ data }) => {
  return (
    <div>
      {data && data.allPeople &&
        data.allPeople.people.map((curr, idx) => (
          <div key={curr.id}>
            <p>{curr.name}</p>
          </div>
        ))}
    </div>
  );
};

export { People };
