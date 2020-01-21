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
    border: "1px solid green"
  }
}

export { People };
