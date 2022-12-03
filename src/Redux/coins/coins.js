import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const initialState = {
  allCoins: [],
  defaultCoins: [],
  searchedCoins: [],
  loading: true,
  timePicked: '',
};

const URL = 'https://api.coincap.io/v2/assets';

export const fetchCoins = createAsyncThunk(types.COINS_FETCHED, async () => {
  const response = await axios.get(URL);
  return response.data;
});

const coinsSlice = createSlice({
  name: 'coinSlice',
  initialState,
  reducers: {
    searchCoins: (state, action) => ({
      ...state,
      searchedCoins: [
        // eslint-disable-next-line max-len
        ...state.allCoins.filter((coin) => coin.name.toLowerCase().includes(action.payload.toLowerCase())),
      ],
    }),
  },
  extraReducers: {
    [fetchCoins.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = {
        ...state,
        allCoins: action.payload.data,
        defaultCoins: action.payload.data.filter((coin) => coin.rank <= 20),
        timePicked: action.payload.timestamp,
        loading: false,
      };
      return state;
    },
  },
});

export const { searchCoins } = coinsSlice.actions;

export default coinsSlice.reducer;
