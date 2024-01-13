// src/redux/reducers/settingsReducer.js
const initialState = {
    theme: 'light', // Just an example state
  };
  
  const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_THEME':
        return {
          ...state,
          theme: action.payload,
        };
      // ... other actions related to settings
      default:
        return state;
    }
  };
  
  export default settingsReducer;
  