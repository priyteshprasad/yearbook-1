import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const chargesSlice = createSlice({
    name:"charges",
    initialState : {service: 0, labour: 0, taxes: 0},
    reducers: {
        applyServiceCharge: (state,action) => {state.service+=20},
        applyLabourCharge: (state, action) => {state.labour += action},
    }
});
export const {applyLabourCharge: aLC} = chargesSlice.actions; 

const newStore = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
})

export default newStore