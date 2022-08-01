import { combineReducers } from "redux";
import hotelsReducer from "./hotels.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  hotels: hotelsReducer,
  user: userReducer
})

export default rootReducer;
