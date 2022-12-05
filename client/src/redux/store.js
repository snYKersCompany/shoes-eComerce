import { configureStore } from "@reduxjs/toolkit";
import characters from "./characters/characterSlice"

export const store = configureStore({
    reducer: {
        characters: characters,
    }
})