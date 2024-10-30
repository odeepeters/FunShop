import { createContext, useReducer } from "react";

export const store = createContext();

const initialState = {
    cart: {
        cartItems: [],
    },
};

function reducer(state, action) {
    switch (action.type) {
        case 'CART_ADD_ITEM':
        // add to cart
        return {...state,
             cart: {
                ...state.cart, 
                cartItems:[...state.cart.cartItems, action.payload]
            },
        };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] =  useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <store.Provider value={value}>{props.children} </store.Provider>
}