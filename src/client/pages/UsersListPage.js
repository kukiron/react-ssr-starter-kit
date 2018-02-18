import React, { Component } from "react"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { fetchUsers } from "../../data/actions"

const styles = {
  marginTop: "60px"
}

class UsersListPage extends Component {
  componentDidMount() {
    const { users, fetchUsers } = this.props
    users.length === 0 && fetchUsers()
  }

  renderUsers() {
    const { users } = this.props
    if (users.length === 0)
      return (
        <h4 className="center-align" style={styles}>
          Loading...
        </h4>
      )

    return users.map(user => <li key={user.id}>{user.name}</li>)
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users Listed`}</title>
        <meta property="og:title" content="Users' Page" />
      </Helmet>
    )
  }

  render() {
    return (
      <div className="center-align" style={styles}>
        {this.head()}
        <h5>Here's a list of users:</h5>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => ({ users })

export const loadData = ({ dispatch }) => dispatch(fetchUsers())

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
}
