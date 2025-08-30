import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});

// Types for usage in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
