import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getGreeting from '../greetings_api/greetings_api';

const get_random_greeting = createAction('messages/get_random_greeting');
const initialState = {
  loading: false,
  greeting: [],
  error: '',
};

export const randomGreeting = createAsyncThunk(get_random_greeting, async () => {
  const greeting = await getGreeting();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greetingText',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(randomGreeting.fulfilled, (state, action) => {
      state.load = false;
      state.greeting = action.payload;
    }).addCase(randomGreeting.rejected, (state, action) => {
      state.load = false;
      state.greeting = [];
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;