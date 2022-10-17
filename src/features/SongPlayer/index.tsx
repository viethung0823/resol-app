import ReactPlayer from 'react-player';
import { useAppSelector } from 'app/hook';

const SongPlayer = () => {
	const { isSongMuted, isSongLoop, isSongPlaying, songURL, songVolume } = useAppSelector((state) => state.songPlayerSlice);

	return (
		<ReactPlayer
			style={{ display: 'none' }}
			url={songURL}
			volume={songVolume}
			playing={isSongPlaying}
			loop={isSongLoop}
			muted={isSongMuted}
			config={{
				file: {
					attributes: {
						autoPlay: true,
					},
				},
			}}
			onEnded={() => {}}
			onProgress={() => {}}
			onDuration={() => {}}
		/>
	);
};

export default SongPlayer;
