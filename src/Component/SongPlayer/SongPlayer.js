import {React} from "react";
import ReactPlayer from "react-player";
import {useAppContext} from "../../context/context";

export default function SongPlayer() {
	const {songPlayerCom, songData, songPlaylist, songIndex, songPlay, songLoop, songVolume, setSongPlayedTime, setSongDurationTime, setSongIndex} = useAppContext();

	return (
		<ReactPlayer
			ref={songPlayerCom}
			style={{display: "none"}}
			url={songData[songPlaylist][songIndex].link}
			playing={songPlay}
			loop={songLoop}
			volume={songVolume}
			config={{
				file: {
					attributes: {
						autoPlay: true,
					},
				},
			}}
			onEnded={() => {
				songIndex === songData[songPlaylist].length - 1 ? setSongIndex(0) : setSongIndex((prevIndex) => prevIndex + 1);
			}}
			onProgress={(data) => setSongPlayedTime(data.playedSeconds)}
			onDuration={(total) => setSongDurationTime(total)}
		/>
	);
}
