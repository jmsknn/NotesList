import { applyMiddleware, combineReducers, createStore } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import notesReducer from "./notes";

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history)];
const rootReducer = combineReducers({
  router: connectRouter(history),
  notes: notesReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
