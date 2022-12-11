import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'night',
    showScrollBtn: false,
};

export const controlTheme = (theme) => {
    const [html] = document.getElementsByTagName('html');
    html.dataset.theme = theme;
    localStorage.setItem('fav-theme', theme);
};

const uiSlice = createSlice({
    name: 'UI',
    initialState,
    reducers: {
        // THEME CONTROL
        changeTheme: (state, action) => {
            state.theme = action.payload;
            controlTheme(state.theme);
        },
        checkForFavTheme: (state) => {
            if (localStorage.getItem('fav-theme')) {
                state.theme = localStorage.getItem('fav-theme');
                controlTheme(state.theme);
            } else controlTheme(state.theme);
        },
        // SCROLL BUTTON CONTROL
        ToggleScrollBtn: (state, action) => {
            state.showScrollBtn = action.payload;
        },
    },

    extraReducers: (builder) => {},
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
