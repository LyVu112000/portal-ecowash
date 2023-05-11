// import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from "./reducers/layoutReducer"
import enumDataReducer from "./reducers/enumDataReducer"

// const initialState = {
//   sidebarShow: 'responsive'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    enumData: enumDataReducer
  }
})

export default store