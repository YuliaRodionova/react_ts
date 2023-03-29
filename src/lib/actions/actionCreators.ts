import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, CHANGE_CART } from "./actionTypes";
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./actionTypes";
import { ICartItem } from "../../interfaces/ICartItem";
import { IProduct } from "../../interfaces/IProduct";
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

export const changeCart = (productId: number, changeAction: string): IAction => {
    return { type: CHANGE_CART, payload: { productId, changeAction } };
};

export const addProduct = (product: IProduct): IAction => {
    return { type: ADD_PRODUCT, payload: { product } };
};

export const deleteProduct = (id: number): IAction => {
    return { type: DELETE_PRODUCT, payload: { id } };
};

export const editProduct = (editedProduct: IProduct): IAction => {
    return { type: EDIT_PRODUCT, payload: { editedProduct } };
};