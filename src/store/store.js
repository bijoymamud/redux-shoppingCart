import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import cloathingReducer from './chothingSlice'
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        clothing: cloathingReducer,
    },
});

export default store;
