import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: []
}


const movieSlice = createSlice({
    name: "movie",
    initialState: initialState,
    reducers: {
        getMovies: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;