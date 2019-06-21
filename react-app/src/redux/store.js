import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "home"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = [thunk, routerMiddleware(history)];

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

export default store;
