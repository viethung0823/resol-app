import { configureStore } from '@reduxjs/toolkit';
import { songPlayerSlice, videoPlayerSlice } from './slice';

const rootReducer = {
	videoPlayerSlice,
	songPlayerSlice,
};

export const store = configureStore({
	reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
