import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import cartReducer from "../reducers/cart";
import productsReducer from "../reducers/products";
import { loadState } from "../localStorage/localStorage";

const rootReducer = combineReducers({
    cartList: cartReducer,
    productsList: productsReducer
});

const persistedState = loadState();

const store = legacy_createStore(rootReducer, persistedState);

export default store;

export type RootState = ReturnType<typeof store.getState>;