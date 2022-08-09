import ReactPlayer from "react-player";
import styles from "./index.module.scss";
import {useAppSelector} from "app/hook";

const VideoPlayer = () => {
	const videoURL = useAppSelector((state) => state.videoPlayer.videoURL);
	const isEnableVideoSound = useAppSelector((state) => state.videoPlayer.isEnableVideoSound);
	const videoVolume = useAppSelector((state) => state.videoPlayer.videoVolume);

	return (
		<ReactPlayer
			className={styles.VideoPlayer}
			url={videoURL}
			volume={videoVolume}
			muted={isEnableVideoSound}
			playing
			loop
			config={{
				file: {
					attributes: {
						muted: true,
						autoPlay: true,
					},
				},
				youtube: {
					playerVars: {showinfo: 0, autoplay: 1, controls: 0, rel: 0, hd: 1, vq: "hd720", modestbranding: 1, iv_load_policy: 3},
				},
			}}
			style={{
				background: `url("./assests/btn/loading.gif") #000 center no-repeat`,
			}}
		/>
	);
};

export default VideoPlayer;
