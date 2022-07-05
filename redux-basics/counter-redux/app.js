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

//store
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  document.getElementById("count").innerHTML = store.getState();
};
store.subscribe(render);
render();

const increment = () => {
  store.dispatch({ type: "INCREMENT" });
};

const decrement = () => {
  store.dispatch({ type: "DECREMENT" });
};
