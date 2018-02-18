import App from "./client/App"
import HomePage from "./client/pages/HomePage"
import UsersListPage from "./client/pages/UsersListPage"
import AdminsListPage from "./client/pages/AdminsListPage"
import NotFoundPage from "./client/pages/NotFoundPage"

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true
      },
      {
        ...UsersListPage,
        path: "/users"
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...NotFoundPage
      }
    ]
  }
]
