import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "./actionTypes";
import { ICartItem } from "../../interfaces/ICartItem";
import { IAction } from "../../interfaces/IAction";

export const addToCart = (product: ICartItem): IAction => {
    return { type: ADD_TO_CART, payload: { product } };
};

export const deleteFromCart = (id: number): IAction => {
    return { type: DELETE_FROM_CART, payload: { id } };
};

export const clearCart = (): IAction => {
    return { type: CLEAR_CART };
};