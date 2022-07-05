//reducer
const reducer = (state, action) => {
  if (action === "INCREMENT") {
    return state + 1;
  }

  if (action === "DECREMENT") {
    return state - 1;
  }

  return state;
};

let state = 1;

const render = () => {
  document.getElementById("count").innerHTML = state;
};

const dispatch = (action) => {
  console.log(`Action: ${action}`);
  console.log(`State before: ${state}`);
  state = reducer(state, action);
  console.log(`State after: ${state}`);
  console.log("-------------------------");
  render();
};

dispatch();

const increment = () => {
  dispatch("INCREMENT");
};

const decrement = () => {
  dispatch("DECREMENT");
};
