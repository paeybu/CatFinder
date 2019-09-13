import { GET_ALL_BREEDS, GET_SINGLE_BREED, GET_IMAGES } from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_BREEDS:
      return {
        ...state,
        breeds: action.payload
      }
    case GET_SINGLE_BREED:
      return {
        ...state,
        breed: action.payload
      }
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload
      }
    default:
      return state
  }
}
