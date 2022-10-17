import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoPlayerState {
	videoURL: string;
	isVideoMuted: boolean;
	videoVolume: number;
}

const initialState: VideoPlayerState = {
	videoURL: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
	isVideoMuted: false,
	videoVolume: 0.5,
};

const videoPlayerSlice = createSlice({
	name: 'videoPlayerSlice',
	initialState: initialState,
	reducers: {
		changeVideoURL(state: VideoPlayerState, action: PayloadAction<string>) {
			state.videoURL = action.payload;
		},
		changeVideoVolume(state: VideoPlayerState, action: PayloadAction<number>) {
			state.videoVolume = action.payload;
		},
		toggleVideoSound(state: VideoPlayerState) {
			state.isVideoMuted = !state.isVideoMuted;
		},
	},
});

export const { changeVideoURL, changeVideoVolume, toggleVideoSound } = videoPlayerSlice.actions;
export default videoPlayerSlice.reducer;
