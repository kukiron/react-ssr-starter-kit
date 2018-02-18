import React from "react"
import { Helmet } from "react-helmet"

const styles = {
  marginTop: "80px"
}

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true

  const head = () => (
    <Helmet>
      <title>Page Not Found</title>
      <meta property="og:title" content="Page Not Found" />
    </Helmet>
  )

  return (
    <div style={styles}>
      {head()}
      <h3 className="center-align">Oops! Route not found!!</h3>
    </div>
  )
}

export default {
  component: NotFoundPage
}
