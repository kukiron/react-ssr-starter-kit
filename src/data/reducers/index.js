import { combineReducers } from "redux"

import usersReducer from "./users_reducer"
import authReducer from "./auth_reducer"
import adminsReducer from "./admins_reducer"

const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  admins: adminsReducer
})

export default rootReducer
