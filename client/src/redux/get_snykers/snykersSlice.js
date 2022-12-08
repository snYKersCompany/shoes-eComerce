import { createSlice } from "@reduxjs/toolkit";

export const snykersSlice = createSlice({
    name: 'snykers',
    initialState: {
        snykers: [],
    },

    reducers: {
        getAllSnykers: (state, action) => {
            state.snykers = action.payload
        }
    },

})

export const { getAllSnykers } = snykersSlice.actions

export default snykersSlice.reducer