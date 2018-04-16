import bitcoin from "./bitcoin";
import balance from "./balance";
import { combineReducers } from "redux";

export default combineReducers({
  bitcoin,
  balance
});
