const redux = require("redux");

const INITIAL_STATE = {
  counter: 0,
};

const reducer = (store = INITIAL_STATE, action) => {
  let newStore = store;

  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 2 };
  } else if (action.type === "DECREMENT") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: action.payload.num1 + action.payload.num2 };
  }
  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({
  type: "ADDITION",
  payload: {
    num1: 6,
    num2: 8,
  },
});
