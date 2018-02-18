import { FETCH_USERS } from "../actions"

export default (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_USERS:
      return payload.data

    default:
      return state
  }
}
