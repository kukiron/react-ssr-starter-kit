import React from "react"

const styles = {
  outer: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: "10"
  },
  inner: {
    position: "absolute",
    left: "30%",
    right: "30%",
    top: "30%",
    bottom: "30%",
    margin: "auto",
    background: "#ddd",
    textAlign: "center",
    border: "2px solid #4caf50",
    borderRadius: "5px"
  },
  header: {
    margin: "60px auto 40px"
  }
}

export default ({ text, closePopup }) => (
  <div style={styles.outer}>
    <div style={styles.inner}>
      <h4 style={styles.header}>{text}</h4>
      <button className="btn waves-effect waves-light" onClick={closePopup}>
        Close Me
      </button>
    </div>
  </div>
)
