import React from "react"
import { renderRoutes } from "react-router-config"

import { fetchCurrentUser } from "../data/actions"
import Header from "./components/Header"

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
)

export default {
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
  component: App
}
