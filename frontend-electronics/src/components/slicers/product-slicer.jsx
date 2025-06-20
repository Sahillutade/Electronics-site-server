import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { addToWishlist, removeFromWishlist } = productSlice.actions;
export default productSlice.reducer;