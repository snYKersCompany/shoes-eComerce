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
        },
        getAllUser: (state, action) => {
            state.users = action.payload
        },
        userByID: (state, action) => {
            state.userDetail = action.payload
            console.log('esto es userDetails en Slicer', state.userDetail)
        }
    }
})

export const {
    postUser,
    getAllUser,
    userByID
} = userSlice.actions

export default userSlice.reducer