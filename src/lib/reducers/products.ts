import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../actions/actionTypes";
import { IAction } from "../../interfaces/IAction";
import { IProduct } from "../../interfaces/IProduct";

interface IProductState {
    productsList: IProduct[];
}

const initialState: IProductState = {
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
        // case EDIT_PRODUCT:
        //     return {
        //         ...state,
        //         cartList: []
        //     }
        default:
            return state;
    }
}