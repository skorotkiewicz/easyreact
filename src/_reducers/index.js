import { combineReducers } from "redux";
import { counter, users, todos } from "./app";

const allReducer = combineReducers({
  counter,
  users,
  todos,
});

export default allReducer;
