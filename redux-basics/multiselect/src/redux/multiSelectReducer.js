const INITIAL_STATE = {
  fruits: ["Mango", "Guava", "Banana", "Apple", "PineApple"],
  selectedFruits: [],
};

const multiSelectReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SELECT_FRUIT":
      newState.selectedFruits.push(action.payload);
      break;
    case "UNSELECT_FRUIT":
      newState.selectedFruits = newState.selectedFruits.filter(
        (f) => f !== action.payload
      );
      break;
    default:
      break;
  }
  return newState;
};

export default multiSelectReducer;
