/**
 * Reducers specify how the application's state changes in response to actions sent
 * to the store. Remember that actions only describe what happened, but don't
 * describe how the application's state changes.
 */
import { combineReducers } from "redux";
import {
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "../actions/actions";
const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// };

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Objec.assign({}, todos, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
// function todoApp(state = [], action) {
//   return {
//     visibilityFilter: visibilityFilter(stae.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   };
// }

/**
 * combinerReducer generates a function that calls all the reducer with the slice of selected state and combine result into a single object
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
