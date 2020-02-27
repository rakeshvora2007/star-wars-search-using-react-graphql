import React from 'react'

const Loading = () => {
    return (
        <div style={styles.loadingStyles}>
            Loading....
        </div>
    )
}

const styles = {
    loadingStyles: {
        color: "white",
        fontSize: "96px",
        margin: "300px auto",
        fontFamily: "starWarsFont"
    }
}

export default Loading
