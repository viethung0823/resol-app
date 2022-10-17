import { Fragment, useEffect, useState } from 'react';
import SongPlayer from './index';
import { SongController, SongPlaylist } from './components';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { toggleSongLoop, togglePlayingSong, toggleSongSound } from './slice';

function SongPlayerContainer() {
	const dispatch = useAppDispatch();
	const { songVolume, isSongPlaying } = useAppSelector((state) => state.songPlayerSlice);
	const playIcon = isSongPlaying ? './assets/btn/pause.svg' : './assets/btn/play.svg';
	const [volumeIcon, setVolumeIcon] = useState('./assets/btn/volume-medium.svg');

	const mockSong = {
		name: 'chay ngay di',
		link: 'https://www.youtube.com/watch?v=32sYGCOYJUM',
		artist: 'M-TP',
		coverArtLink: 'https://upload.wikimedia.org/wikipedia/vi/8/85/Chay_ngay_di.png',
		id: 0,
	};

	const handleShuffle = () => {};

	const handlePreviousSong = () => {};

	const handleNextSong = () => {};

	const handleTogglePlay = () => {
		dispatch(togglePlayingSong());
	};

	const handleLoop = () => {
		dispatch(toggleSongLoop());
	};

	const handleChangeSongVolume = () => {};

	const handleFullScreen = () => {};

	const handleHide = () => {};

	const handleMute = () => {
		dispatch(toggleSongSound());
	};

	const handleSeek = () => {};

	useEffect(() => {}, []);
	// gets duration of current song

	useEffect(() => {
		if (songVolume === 0) {
			setVolumeIcon('./assets/btn/volume-mute.svg');
		} else if (songVolume >= 0.01 && songVolume <= 0.33) {
			setVolumeIcon('./assets/btn/volume-low.svg');
		} else if (songVolume >= 0.34 && songVolume <= 0.66) {
			setVolumeIcon('./assets/btn/volume-medium.svg');
		} else {
			setVolumeIcon('./assets/btn/volume-high.svg');
		}
	}, [songVolume]); // change volume icon

	return (
		<Fragment>
			<SongPlayer />
			<SongPlaylist />
			<SongController
				currentSong={mockSong}
				playIcon={playIcon}
				volumeIcon={volumeIcon}
				handleShuffle={handleShuffle}
				handleLoop={handleLoop}
				handleNextSong={handleNextSong}
				handleTogglePlay={handleTogglePlay}
				handlePreviousSong={handlePreviousSong}
				handleSeek={handleSeek}
				handleChangeSongVolume={handleChangeSongVolume}
				handleFullScreen={handleFullScreen}
				handleHide={handleHide}
				handleMute={handleMute}
			/>
		</Fragment>
	);
}

export default SongPlayerContainer;
