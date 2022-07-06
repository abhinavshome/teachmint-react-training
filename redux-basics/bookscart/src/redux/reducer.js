const INITIAL_STATE = {
  books: [],
  cart: {
    items: [],
    totalPrice: 0,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "LOAD_BOOKS":
      newState.books = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default reducer;
