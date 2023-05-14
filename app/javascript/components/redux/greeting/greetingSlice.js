import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://127.0.0.1:3000/api/v1/greetings/random';

const initialState = {
  greeting: '',
  status: 'idle',
  error: null,
};

export const getGreeting = createAsyncThunk('GREETING_FETCH', async () => {
  const response = await axios.get(url);
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGreeting.pending, (state) => ({
      ...state,
      status: 'loading',
    })).addCase(getGreeting.fulfilled, (state, action) => ({
      ...state,
      status: 'successfully',
      greetings: action.payload,
    })).addCase(getGreeting.rejected, (state, action) => ({
      ...state,
      status: 'loading',
      error: action.error.message,
    }));
  },
});

export const selectGreeting = (state) => state.greeting;
export const selectStatus = (state) => state.greeting.status;
export const selectError = (state) => state.greeting.error;

export default greetingSlice.reducer;