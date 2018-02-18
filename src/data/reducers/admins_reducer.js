import { FETCH_ADMINS } from "../actions"

export default (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_ADMINS:
      return payload.data

    default:
      return state
  }
}
