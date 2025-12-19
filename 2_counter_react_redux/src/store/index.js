import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_STATE, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + action.payload.inputVal,
    };
  } else if (action.type === "SUB") {
    return {
      ...store,
      counter: store.counter - action.payload.inputVal,
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
