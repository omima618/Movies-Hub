import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../axios/axios';

const initialState = {
    popular: [],
    topRated: [],
    trending: [],
    moviesTrailer: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

// GET POPULAR
const getPopular = createAsyncThunk(
    'movies/getPopular',
    async ({ opt, pageNum = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(pageNum).get(`${opt}/popular`);
            return data.results;
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// GET TRENDING
const getTrending = createAsyncThunk(
    'movies/getTrending',
    async ({ time, page = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(page).get(`trending/movie/${time}`);
            return data.results;
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// GET TOP RATED
const getTopRated = createAsyncThunk(
    'movies/getTopRated',
    async ({ opt, page = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(page).get(`${opt}/top_rated`);
            return data.results;
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        resetPopular: (state) => {
            state.isLoading = true;
            state.popular = [];
        },
        resetTrending: (state) => {
            state.isLoading = true;
            state.trending = [];
        },
        resetTopRated: (state) => {
            state.isLoading = true;
            state.topRated = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPopular.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPopular.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.popular = action.payload;
            })
            .addCase(getPopular.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getTrending.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTrending.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.trending = action.payload;
            })
            .addCase(getTrending.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getTopRated.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTopRated.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.topRated = action.payload;
            })
            .addCase(getTopRated.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const requests = { getPopular, getTopRated, getTrending };

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
