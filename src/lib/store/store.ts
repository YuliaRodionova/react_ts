import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cart";
import { loadState } from "../localStorage/localStorage";

const rootReducer = combineReducers({
    cartList: cartReducer
});

const persistedState = loadState();

// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer
//     })
// }

const store = legacy_createStore(rootReducer, persistedState);

export default store;

export type RootState = ReturnType<typeof store.getState>;

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']