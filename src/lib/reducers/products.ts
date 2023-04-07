import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../actions/actionTypes";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";

export interface IProductState {
    productsList: IProduct[];
}

export const initialState: IProductState = {
    productsList: [],
}

export default function productsReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case ADD_PRODUCT:
            const { product } = action.payload;
            const productsList = state.productsList;
            productsList.push(product);
            return {
                ...state,
                productsList
            }
        case DELETE_PRODUCT:
            const { id } = action.payload;
            const newProductsList = state.productsList.filter(item => {
                return item.id !== id;
            });
            return {
                ...state,
                productsList: newProductsList
            }
        case EDIT_PRODUCT:
            const { editedProduct } = action.payload;
            const editedProductsList = state.productsList.map(item => {
                return item.id == editedProduct.id ? editedProduct : item;
            });
            return {
                ...state,
                productsList: editedProductsList
            }
        default:
            return state;
    }
}