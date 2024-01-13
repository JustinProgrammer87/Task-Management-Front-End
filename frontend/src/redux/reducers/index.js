// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer'; // Make sure this is the correct path to your tasks reducer file

const rootReducer = combineReducers({
  // The key here should be the name of the state slice
  tasks: tasksReducer,
  // Add other reducer functions here for additional state slices
});

export default rootReducer;
