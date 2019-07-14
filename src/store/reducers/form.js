const INITIAL_STATE = {
  disabled: true,
  name: "",
  email: "",
  celphone: "",
  birthdate: "",
  id: "",
  amount: null
};

export default function form(state = INITIAL_STATE, action) {
  if (action.type == "SHOW_FORM") {
    return { ...state, disabled: action.disabled };
  } else if (action.type == "TOGGLE_FORM") {
    return { ...state, disabled: action.disabled };
  }

  return state;
}
