import { useReducer } from "react";

import {
    UPDATE_USER,
    ADD_TO_CART,
    CHANGE_CART_ITEM_VALUE,
    REMOVE_ALL_CART_ITEMS,
    REMOVE_ONE_CART_ITEM
}
    from "./actions";

export const reducer = (state = [], action) => {

    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                user: { ...state.user, ...action.payload }
            }

        case ADD_TO_CART:
            const productExist = state.cart.find(product => product.productId === action.payload.productId)

            if (productExist) {
                const updateCart = state.cart.map(product =>
                    product.productId === action.payload.productId
                        ? { ...product, amount: product.amount + action.payload.amount }
                        : product
                )

                return {
                    ...state,
                    cart: updateCart,
                    cartItems: state.cartItems + 1
                }
            }

            const newItem = {
                ...action.payload,
                id: state.cartId + 1
            }

            return {
                ...state,
                cart: [...state.cart, newItem],
                cartItems: state.cartItems + 1,
                cartId: state.cartId + 1
            }

        case REMOVE_ALL_CART_ITEMS:
            return {
                ...state,
                cart: [],
                cartItems: 0,
                cartId: 0
            }

        case REMOVE_ONE_CART_ITEM:

            const filteredCart = state.cart.filter(product => product.id !== action.payload.id)

            return {
                ...state,
                cart: filteredCart,
                cartItems: state.cartItems - action.payload.amount
            }

        case CHANGE_CART_ITEM_VALUE:
            const updateCartItem = state.cart.map(product =>
                product.id === action.payload.id
                    ? { ...product, amount: action.payload.amount } : product
            )

            const difference = action.payload.amount - action.payload.oldAmount

            return {
                ...state,
                cart: updateCartItem,
                cartItems: state.cartItems + difference
            }
        default:
            return
    }
}

export function useAppReducer(initialState) {
    return useReducer(reducer, initialState)
}