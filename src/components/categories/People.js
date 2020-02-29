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
    border: "10px solid #0c0b53",
    padding: "10px 20px",
    margin: "10px",
    fontFamily: "starWarsFont",
    background: "#161555",
    borderRadius: "10px"
  }
}

export { People };
