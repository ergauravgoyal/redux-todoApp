/**
 * Reducers specify how the application's state changes in response to actions sent
 * to the store. Remember that actions only describe what happened, but don't
 * describe how the application's state changes.
 */
import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
/**
 * combinerReducer generates a function that calls all the reducer with the slice of selected state and combine result into a single object
 */
export default combineReducers({
  visibilityFilter,
  todos
});
