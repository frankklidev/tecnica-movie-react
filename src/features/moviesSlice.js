import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../help/config';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY1 = API_KEY;

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopular', async (page = 1) => {
    const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY1}&page=${page}`);
    return response.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchDetails', async (movieId) => {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY1}`);
    return response.data;
});



const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    popular: [],
    currentMovie: null,
    status: 'idle',
    error: null,
    currentPage: 1,
    totalPages: 1
},
reducers: {
    incrementPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    decrementPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    }
  },
  extraReducers: (builder) => {
      builder
          .addCase(fetchPopularMovies.pending, (state) => {
              state.status = 'loading';
          })
          .addCase(fetchPopularMovies.fulfilled, (state, action) => {
              state.status = 'succeeded';
              if (action.payload && 'results' in action.payload && 'page' in action.payload && 'total_pages' in action.payload) {
                  state.popular = action.payload.results;
                  state.currentPage = action.payload.page;
                  state.totalPages = action.payload.total_pages;
              }
          })
          .addCase(fetchPopularMovies.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message || null;
          })
          .addCase(fetchMovieDetails.fulfilled, (state, action) => {
              state.currentMovie = action.payload;
          });
  }
});

export const { incrementPage, decrementPage } = moviesSlice.actions;

export default moviesSlice.reducer;
