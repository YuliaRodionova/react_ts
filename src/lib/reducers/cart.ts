import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, CHANGE_CART } from "../actions/actionTypes";
import { IAction } from "../../interfaces/IAction";
import { ICartItem } from "../../interfaces/ICartItem";

interface ICartState {
    cartList: ICartItem[];
}

const initialState: ICartState = {
    cartList: [],
}

export default function cartReducer(state = initialState, action: IAction) {
    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action.payload;
            const cartList = state.cartList;
            const cartListItem = cartList.findIndex(item => item.id == product.id);
            if (cartListItem != -1) {
                cartList[cartListItem].count += product.count;
            } else {
                cartList.push(product);
            }
            return {
                ...state,
                cartList
            }
        case DELETE_FROM_CART:
            const { id } = action.payload;
            const newCartList = state.cartList.filter(item => {
                return item.id !== id;
            });
            return {
                ...state,
                cartList: newCartList
            }
        case CLEAR_CART:
            return {
                ...state,
                cartList: []
            }
        case CHANGE_CART:
            const { productId, changeAction } = action.payload;
            const changedCartList = state.cartList.map(item => {
                if (item.id == productId) {
                    switch (changeAction) {
                        case 'plus':
                            item.count += 1;
                            break;
                        case 'minus':
                            item.count -= 1;
                            break;
                        default:
                            item.count = item.count;
                    }
                }
                return item;
            });
            return {
                ...state,
                cartList: changedCartList
            }

        default:
            return state;
    }
}