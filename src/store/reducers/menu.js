const INITIAL_STATE = {
  hidden: false
};

export default function menu(state = INITIAL_STATE, action) {
  if (action.type == "SHOW_MENU") {
    return {
      ...state,
      hidden: action.hidden
    };
  } else if (action.type == "HIDE_MENU") {
    return {
      ...state,
      hidden: action.hidden
    };
  } else if (action.type == "SHOW_MENU_FIREFOX") {
    return {
      ...state,
      hidden: action.hidden
    };
  } else if (action.type == "HIDE_MENU_FIREFOX") {
    return {
      ...state,
      hidden: action.hidden
    };
  }
  return state;
}
