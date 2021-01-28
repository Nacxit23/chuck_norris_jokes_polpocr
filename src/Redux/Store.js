import { createStore, combineReducers } from "redux";
import { CategoryReduce } from "../reduces/CategoryReduce";

const reducers = combineReducers({
  category: CategoryReduce,
});

export const Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
