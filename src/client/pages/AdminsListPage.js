import React, { Component } from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { fetchAdmins } from "../../data/actions"
import requireAuth from "../components/hocs/requireAuth"

const styles = {
  marginTop: "60px"
}

class UsersListPage extends Component {
  componentDidMount() {
    const { admins, fetchAdmins } = this.props
    admins.length === 0 && fetchAdmins()
  }

  renderAdmins() {
    const { admins } = this.props
    if (admins.length === 0)
      return (
        <h4 className="center-align" style={styles}>
          Loading...
        </h4>
      )

    return admins.map(admin => <li key={admin.id}>{admin.name}</li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.admins.length} Admins Listed`}</title>
        <meta property="og:title" content="Admins' Page" />
      </Helmet>
    )
  }

  render() {
    return (
      <div className="center-align" style={styles}>
        {this.head()}
        <h5>Here's the list of admins (protected):</h5>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({ admins })

export const loadData = ({ dispatch }) => dispatch(fetchAdmins())

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(UsersListPage)
  )
}
