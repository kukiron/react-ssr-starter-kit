import { FETCH_CURRENT_USER } from "../actions"

export default (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case FETCH_CURRENT_USER:
      return payload.data || false

    default:
      return state
  }
}
