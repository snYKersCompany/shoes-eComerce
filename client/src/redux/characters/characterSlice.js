import { createSlice } from "@reduxjs/toolkit"

export const charactersSlice = createSlice({
    name: "characters",
    // esto eh como el redux normalito, debajo tengo los estados
    initialState: {
        characters: [],
        detail: {}
    },

    // no me mientas son acciones
    reducers: {
        //toma el state.characters = characters: []
        getAllCharacters: (state, action) => {
            state.characters = action.payload
        },
    }
})


export const { getAllCharacters } = charactersSlice.actions

export default charactersSlice.reducer