import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            state.favorites.unshift(action.payload);
        },
        removeFromFav: (state, action) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {},
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice.reducer;
