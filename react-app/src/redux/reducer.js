import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { homeReducer } from "../screens/home";


export default combineReducers({
  router: routerReducer,
  home: homeReducer
});
