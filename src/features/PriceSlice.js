//Para despachar el precio de las peliculas y consumirlo
import { createSlice } from '@reduxjs/toolkit'; 

export const priceSlice = createSlice({
  name: 'price',
  initialState: {
    value: 0,
  },
  reducers: {
    setPrice: (state, action)=>{
        state.price = action.payload;
    },
  },
});

export const { setPrice } = priceSlice.actions;

export const selectPrice = (state) => state.price.price;

//export default userSlice.reducer;
export default priceSlice.reducer;