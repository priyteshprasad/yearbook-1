import { createSlice } from "@reduxjs/toolkit";

export default cartSlice = createSlice({
    name:"cart",
    initialState : {products: []},
    reducers: {
        increment: (state) => {state.products.push("thing")}
    }
});