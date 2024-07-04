import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TCart } from '../type';

export interface CartState {
    items: TCart[];
}

interface Payload {
    id: number,
    price: number
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state: CartState, action: PayloadAction<TCart>) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
                item.totalPrices += item.price
            } else {
                state.items.push({ ...action.payload, quantity: 1, totalPrices: action.payload.price });
            }
        },
        removeItem: (state: CartState, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state: CartState, action: PayloadAction<Payload>) => {
            const { price, id } = action.payload
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += 1;
                item.totalPrices += price
            }
        },
        decreaseQuantity: (state: CartState, action: PayloadAction<Payload>) => {
            const { price, id } = action.payload
            const item = state.items.find(item => item.id === id);
            if (item && item.quantity > 1) {

                item.quantity -= 1;
                const updatedPrice = Number((item.totalPrices - price).toFixed(2))
                item.totalPrices = updatedPrice
            } else {
                state.items = state.items.filter(item => item.id !== id);
            }
        },
    },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
