import { createStore } from "redux";

const INITIAL_STATE = {
  disabled: true,
  name: "",
  email: "",
  celphone: "",
  birthdate: "",
  id: "",
  amount: null
};

function reducer(state = INITIAL_STATE, action) {
  console.log(state);
  return state;
}

const store = createStore(reducer);

export default store;
