import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rpm from "redux-promise-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./reducers/index";


const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],      //yang mau dimasukin dlm persist
}

const pReducer = persistReducer(persistConfig, reducers);

const enhancers = applyMiddleware(rpm, logger);
export const store = createStore(pReducer, enhancers);
export const persistor = persistStore(store);


// const saveState = (state) => {
//   try {
//     console.log("masuk load state");
//     const stringifyState = JSON.stringify(state);
//     localStorage.setItem("state", stringifyState);
//   } catch (error) {
//     alert("Theres error from redux store ");
//     console.log(error);
//   }
// };

// const loadState = () => {
//   try {
//     const stateFromLocal = localStorage.getItem("state");
//     console.log("masuk load state");
//     if (stateFromLocal === null) {
//       return undefined;
//     } else {
//       return JSON.parse(stateFromLocal);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const theState = loadState();
// const enhancers = applyMiddleware(rpm, logger);
// const store = createStore(reducers, theState, enhancers);

// store.subscribe(() => {
//   saveState(store.getState());
// });

// export default store;
