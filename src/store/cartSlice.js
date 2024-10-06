const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, { payload }) => {
            // Normalize the product ID to always use `_id`
            const product = { ...payload, _id: payload._id || payload.id };
            state.push(product);
        },


        remove: (state, { payload }) => {
            return state.filter(product => product._id !== payload);
        }

    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
