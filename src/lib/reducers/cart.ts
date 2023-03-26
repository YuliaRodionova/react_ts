import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from "../actions/actionTypes";
import { IAction } from "../../interfaces/IAction";
import { ICartItem } from "../../interfaces/ICartItem";
import { createSlice } from '@reduxjs/toolkit'

interface ICartState {
    cartList: ICartItem[];
    /*isLoading: boolean;
    error: string;*/
}

const initialState: ICartState = {
    cartList: [],
    /* isLoading: false,
     error: ''*/
}

/*
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        userAdd(state) {
            state.isLoading = true

        },
        userDelete(state, action: PayloadAction<ICartState>) {
            state.isLoading = false;
            state.error = '';
            state.cartList = action.payload;
        },
        clearCart(state, action: PayloadAction<String>) {
            state.isLoading = false;
            state.error = action.payload;
            //можно менять state.object.field = action.payload
        }
    }
})

export default cartSlice.reducer;*/

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
        default:
            return state;
    }
}