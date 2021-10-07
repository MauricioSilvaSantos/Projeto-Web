export const initialState = {
  index: null,
  show: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INDEX":
      return {...state, index: action.values};
    case "SHOW":
      return {...state, show: action.values};
    default:
      return state;
  }
};

export default usersReducer;