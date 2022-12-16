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
<<<<<<< HEAD
        userByID: (state, action) => {
            state.userDetail = action.payload
            console.log('esto es userDetails en Slicer', state.userDetail)
        }
=======
        getUserDashboard: (state, action) => {
            state.userDashboard = action.payload
        },
>>>>>>> dev
    }
})

export const {
    postUser,
    getAllUser,
<<<<<<< HEAD
    userByID
=======
    getUserDashboard,
>>>>>>> dev
} = userSlice.actions

export default userSlice.reducer