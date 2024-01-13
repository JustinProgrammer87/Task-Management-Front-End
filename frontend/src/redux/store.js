// src/redux/store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // This will automatically look for index.js inside reducers folder

// Create a Redux store using the rootReducer
const store = createStore(
  rootReducer,
  // This would be a good place to add Redux middleware if needed
);

export default store;
