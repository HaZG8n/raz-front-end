import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers/index";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"], //yang mau dimasukin dlm persist
};

const pReducer = persistReducer(persistConfig, reducers);

const enhancers = applyMiddleware(rpm, logger);
export const store = createStore(pReducer, enhancers);
export const persistor = persistStore(store);
