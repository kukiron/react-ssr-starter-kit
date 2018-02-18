import React, { Component } from "react"
import { Helmet } from "react-helmet"

import Popup from "../components/Popup"

const styles = {
  marginTop: "200px"
}

class HomePage extends Component {
  constructor() {
    super()
    this.state = { showPopup: false }
  }

  togglePopup() {
    // e.preventDefault()
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  head() {
    return (
      <Helmet>
        <title>React SSR</title>
        <meta property="og:title" content="React SSR" />
      </Helmet>
    )
  }
  render() {
    return (
      <div className="center-align" style={styles}>
        {this.head()}
        <h3>This is a Welcome page</h3>
        <p>Check out these awesome features.</p>
        <button
          className="waves-effect waves-light btn"
          onClick={() => this.togglePopup()}
        >
          Press me!
        </button>
        {this.state.showPopup ? (
          <Popup
            text="Welcome to React SSR"
            closePopup={() => this.togglePopup()}
          />
        ) : null}
      </div>
    )
  }
}

export default {
  component: HomePage
}
