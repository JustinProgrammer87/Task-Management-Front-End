// src/redux/reducers/tasksReducer.js

const initialState = {
    tasks: []
  };
  
  const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        // Logic for adding task
        break;
      case 'TOGGLE_TASK':
        // Logic for toggling task
        break;
      case 'DELETE_TASK':
        // Logic for deleting task
        break;
      // ... other actions
      default:
        return state;
    }
  };
  
  export default tasksReducer;
  