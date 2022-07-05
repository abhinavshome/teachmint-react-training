//reducer
const reducer = (state = 1, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state;
};

export default reducer;
