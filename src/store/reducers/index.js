import { combineReducers } from "redux";

import form from "./form";
import menu from "./menu";
import guests from "./guests";
import speakers from "./speakers";

export default combineReducers({
  form,
  menu,
  guests,
  speakers
});
