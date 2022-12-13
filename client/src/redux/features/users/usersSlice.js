import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        userDetail: {}
    },
    reducers: {
        postUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {
    postUser,
} = userSlice.actions

export default userSlice.reducer