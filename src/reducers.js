// reducers.js
const initialState = {
    courses: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_COURSES':
        return {
          ...state,
          courses: action.payload,
        };
      case 'ADD_COURSE':
        return {
          ...state,
          courses: action.payload,
        };
      case 'REMOVE_COURSE':
        return {
          ...state,
          courses: state.courses.filter(course => course.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  