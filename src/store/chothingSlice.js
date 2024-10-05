import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchClothingData = createAsyncThunk(
    'clothing/fetchClothingData',
    async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        return data;
    }
);

const clothingSlice = createSlice({
    name: "clothing",
    initialState: {
        loading: false,
        productInfo: [],
        error: null
    },
    reducers: {},
    
    extraReducers: (builder) => {
        builder
            .addCase(fetchClothingData.pending, (state) => {
                state.loading = false;
            })
            .addCase(fetchClothingData.fulfilled, (state, action) => {
                state.loading = false;
                state.productInfo =action.payload;
            })
            .addCase(fetchClothingData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }
})


export default clothingSlice.reducer;