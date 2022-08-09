import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VideoPlayerState {
	videoURL: string;
	isEnableVideoSound: boolean;
	videoVolume: number;
}

const initialState: VideoPlayerState = {
	videoURL: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
	isEnableVideoSound: false,
	videoVolume: 0.5,
};

const videoPlayerSlice = createSlice({
	name: "videoPlayer",
	initialState: initialState,
	reducers: {
		changeVideoURL(state: VideoPlayerState, action: PayloadAction<string>) {
			console.log(action.type);
			state.videoURL = action.payload;
		},
		changeVideoVolume(state: VideoPlayerState, action: PayloadAction<number>) {
			state.videoVolume = action.payload;
		},
		toggleVideoSound(state: VideoPlayerState) {
			state.isEnableVideoSound = !state.isEnableVideoSound;
		},
	},
});

export const {changeVideoURL} = videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;
