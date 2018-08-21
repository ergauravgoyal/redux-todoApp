import { createStore } from "redux";

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

import todoApp from "./reducers";

const store = createStore(todoApp);

/**
 * Logs Initial State
 */
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

/**
 * Dispatching some actions
 */

store.dispatch(addTodo("Learn React basics"));
store.dispatch(addTodo("Learn Redux action"));
store.dispatch(addTodo("Learn Redux reducer"));
store.dispatch(addTodo("Learn Redux Store"));
store.dispatch(toggleTodo(1));
//store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
// Stop listening to state updates
unsubscribe();
