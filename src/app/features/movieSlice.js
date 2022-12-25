import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import tmdb from '../axios/axios';

const initialState = {
    popular: [],
    topRated: [],
    trending: [],
    movie: null,
    cast: null,
    ids: { opt: '', keys: [] },
    trailers: [],
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
    async ({ time, pageNum = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(pageNum).get(`trending/movie/${time}`);
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
    async ({ opt, pageNum = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(pageNum).get(`${opt}/top_rated`);
            return data.results;
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// GET IDS
const getIDS = createAsyncThunk(
    'movies/getIDs',
    async ({ opt, pageNum = 1 }, thunkAPI) => {
        try {
            const { data } = await tmdb(pageNum).get(
                `${opt}/${opt === 'tv' ? 'top_rated' : 'popular'}`
            );
            const itmesID = [];
            data.results.forEach((item) => {
                itmesID.push(item.id);
            });
            return { opt, keys: itmesID };
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// GET TRAILERS
const getTrailer = createAsyncThunk(
    'movies/getTrailer',
    async ({ id, opt }, thunkAPI) => {
        try {
            const { data } = await tmdb().get(`${opt}/${id}/videos`);
            return data.results[0].key;
        } catch (error) {
            const message = error.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

// GET MOVIE DETAILS
const getMovieDetails = createAsyncThunk(
    'movies/getMovie',
    async ({ id, opt }, thunkAPI) => {
        try {
            const { data } = await tmdb().get(`${opt}/${id}`);
            const cast = await tmdb().get(`${opt}/${id}/credits`);
            console.log(data);
            console.log(cast.data);
            return { movieDate: data, castData: cast.data };
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
            state.isLoading = false;
            state.popular = [];
        },
        resetTrending: (state) => {
            state.isLoading = false;
            state.trending = [];
        },
        resetTopRated: (state) => {
            state.isLoading = false;
            state.topRated = [];
        },
        resetTrailers: (state) => {
            state.isLoading = false;
            state.trailers = [];
        },
        resetMovie: (state) => {
            state.isLoading = false;
            state.movie = null;
            state.cast = null;
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
            })
            .addCase(getIDS.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getIDS.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.ids = {
                    opt: action.payload.opt,
                    keys: action.payload.keys,
                };
            })
            .addCase(getIDS.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getTrailer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTrailer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.trailers.push(action.payload);
            })
            .addCase(getTrailer.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(getMovieDetails.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.movie = action.payload.movieDate;
                state.cast = action.payload.castData;
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    },
});

export const requests = {
    getPopular,
    getTopRated,
    getTrending,
    getIDS,
    getTrailer,
    getMovieDetails,
};

export const movieActions = movieSlice.actions;

export default movieSlice.reducer;
