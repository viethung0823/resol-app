import ReactPlayer from "react-player";
import {useAppSelector} from "app/hook";

const SongPlayer = () => {
	const songURL = useAppSelector((state) => state.songPlayer.songURL);
	const songVolume = useAppSelector((state) => state.songPlayer.songVolume);
	const isEnableSongSound = useAppSelector((state) => state.songPlayer.isEnableSongSound);
	const isSongPlaying = useAppSelector((state) => state.songPlayer.isSongPlaying);
	const isSongLoop = useAppSelector((state) => state.songPlayer.isSongLoop);

	return (
		<ReactPlayer
			style={{display: "none"}}
			url={songURL}
			volume={songVolume}
			playing={isSongPlaying}
			loop={isSongLoop}
			muted={isEnableSongSound}
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
