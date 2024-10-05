const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, {payload}) {
            return state.filter((item) => item._id !== payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
