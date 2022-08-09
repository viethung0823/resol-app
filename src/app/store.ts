import {configureStore} from "@reduxjs/toolkit";
import {songPlayerSlice, videoPlayerSlice} from "./slice";

export const store = configureStore({
	reducer: {
		videoPlayer: videoPlayerSlice,
		songPlayer: songPlayerSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
