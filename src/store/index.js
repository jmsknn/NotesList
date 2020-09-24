import { combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history)];
const rootReducer = combineReducers({
  router: connectRouter(history),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;