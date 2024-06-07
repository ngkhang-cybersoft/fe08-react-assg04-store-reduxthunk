import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './reducers/storeReducer';

const store = configureStore({
  reducer: {
    storeReducer,
  },
  // 👇 Fix Error: https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
