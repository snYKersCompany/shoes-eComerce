import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        userDetail: {},
        userDashboard: {}
    },
    reducers: {
        postUser: (state, action) => {
            state.users = action.payload
        },
        getAllUser: (state, action) => {
            state.users = action.payload
        },
        getUserDashboard: (state, action) => {
            state.userDashboard = action.payload
        },
        updateUserDashboard: (state, action) => {
            state.userDashboard = action.payload
        },
    }
})

export const {
    postUser,
    getAllUser,
    getUserDashboard,
    updateUserDashboard,
} = userSlice.actions

export default userSlice.reducer