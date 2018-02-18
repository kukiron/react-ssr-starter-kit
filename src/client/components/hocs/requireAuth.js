import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

export default ComposedComponent => {
  class RequireAuth extends Component {
    render() {
      const { auth } = this.props

      switch (auth) {
        case false:
          return <Redirect to="/" />

        case null:
          return <h4>Loading...</h4>

        default:
          return <ComposedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth })

  return connect(mapStateToProps)(RequireAuth)
}
