import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    toShow: true, // Initial boolean state
};
export const counterSlice = createSlice({
    name: "feature",
    initialState,
    reducers: {
        counter(state, action) {
            // console.log("state", action.payload)
            state.toShow = action.payload
        }
    }
})

export const { counter } = counterSlice.actions
export default counterSlice.reducer