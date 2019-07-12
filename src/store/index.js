import { createStore } from "redux";

const INITIAL_STATE = {
  form: {
    disabled: true,
    name: "",
    email: "",
    celphone: "",
    birthdate: "",
    id: "",
    amount: null
  },
  menu: {
    hidden: true
  }
};

function reducer(state = INITIAL_STATE, action) {
  console.log(state);
  return state;
}

const store = createStore(reducer);

export default store;
