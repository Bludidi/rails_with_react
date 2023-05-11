import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greetings';

const store = configureStore({
  reducer: {
    greetingText: greetingSlice,
  },
});

export default store;