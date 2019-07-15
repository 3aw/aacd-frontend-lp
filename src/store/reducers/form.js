const INITIAL_STATE = {
  disabled: true,
  name: "",
  email: "",
  cellphone: "",
  birthdate: "",
  id: "",
  amount: null
};

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_FORM":
      return { ...state, disabled: action.disabled };
    case "TOGGLE_FORM":
      return { ...state, disabled: action.disabled };
    case "SHOW_CONFIRMATION":
      return {
        ...state,
        active: true
      };
    case "TOGGLE_ALL":
      return {
        ...state,
        disabled: true,
        active: false
      };
    case "SET_DATA":
      console.log(state.name);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
