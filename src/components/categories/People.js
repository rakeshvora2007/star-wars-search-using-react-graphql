import React from "react";

const People = ({ data }) => {
  return (
    <>
      {data && data.allPeople &&
        data.allPeople.people.map((curr, idx) => (
          <div key={curr.id} style={styles.menuItem}>
            <p>{curr.name}</p>
          </div>
        ))}
    </>
  );
};

const styles = {
  menuItem: {
    border: "10px solid #552f7b",
    padding: "10px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "rebeccapurple",
    borderRadius: "10px"
  }
}

export { People };
