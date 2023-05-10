import { configStore } from '@reduxjs/toolkit'
import greetingSlice from './greetings/greetings'

const store = configStore({
  reducer: {
    greetingText: greetingSlice,
  },
});

export default store;