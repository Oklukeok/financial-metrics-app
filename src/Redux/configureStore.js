import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinsSlice from './coins/coins';

const reducer = combineReducers({
  coinSlice: coinsSlice,
});

const coinsStore = configureStore({ reducer });

export default coinsStore;
