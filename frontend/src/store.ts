import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {}
});

export type AppStore = typeof store;
// infer these so they update as more middleware-related logic is added.
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];