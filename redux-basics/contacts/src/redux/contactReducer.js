const INITIAL_STATE = {
  contacts: [
    { id: 1, name: "Abhinav", number: 1111111111, address: "Banglaore" },
    { id: 2, name: "Ram", number: 33333333333, address: "New Delhi" },
    { id: 3, name: "Mohan", number: 9999999999, address: "Kolkata" },
    { id: 4, name: "manoj", number: 4444444444, address: "Mumbai" },
  ],
  selectedContactId: 1,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "SELECT_CONTACT":
      newState.selectedContactId = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default contactReducer;
