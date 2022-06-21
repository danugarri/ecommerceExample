import { createAsyncThunk, createSlice, isFulfilled, isPending } from '@reduxjs/toolkit';
import { fetchData } from './getData';

const initialState = {
  status: 'loading',
  entities: {},
};

export const getAsyncData = createAsyncThunk('[FetchData]', async () => {
  const response = await fetchData();

  return response.data;
});

export const getAsyncDataSlice = createSlice({
  name: 'getData',
  initialState,

  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(getAsyncData), (state) => {
        return {
          ...state,
        };
      })
      .addMatcher(isFulfilled(getAsyncData), (state, action) => {
        return {
          ...state,
          status: 'Resolved',
          entities: action.payload,
        };
      });
  },
});

export default getAsyncDataSlice.reducer;
