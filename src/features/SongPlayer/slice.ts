import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SongPlayerState {
	songURL: string;
	isEnableSongSound: boolean;
	songVolume: number;
	isSongPlaying: boolean;
	isSongLoop: boolean;
}

const initialState: SongPlayerState = {
	songURL: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
	isEnableSongSound: false,
	songVolume: 0.5,
	isSongPlaying: false,
	isSongLoop: false,
};

const songPlayerSlice = createSlice({
	name: 'songPlayer',
	initialState: initialState,
	reducers: {
		changeSongURL(state: SongPlayerState, action: PayloadAction<string>) {
			state.songURL = action.payload;
		},
		changeSongVolume(state: SongPlayerState, action: PayloadAction<number>) {
			state.songVolume = action.payload;
		},
		toggleSongSound(state: SongPlayerState) {
			state.isEnableSongSound = !state.isEnableSongSound;
		},
		togglePlayingSong(state: SongPlayerState) {
			state.isSongPlaying = !state.isSongPlaying;
		},
		toggleSongLoop(state: SongPlayerState) {
			state.isSongLoop = !state.isSongLoop;
		},
	},
});

export const { changeSongURL, changeSongVolume, toggleSongSound, togglePlayingSong, toggleSongLoop } = songPlayerSlice.actions;
export default songPlayerSlice.reducer;
