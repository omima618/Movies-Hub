import { configureStore } from '@reduxjs/toolkit';
import favoriteReducer from './features/favoriteSlice';
import uiReducer from './features/uiSlice';
import movieReducer from './features/movieSlice';
export const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        ui: uiReducer,
        movies: movieReducer,
    },
});
