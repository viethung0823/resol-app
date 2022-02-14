import {React, useEffect} from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.scss";
import {useAppContext} from "../../context/context";

export default function VideoPlayer() {
	const {videoData, videoPlaylist, videoIndex, videoVolume, videoMuted} = useAppContext();

	useEffect(() => {
		const childElm = document.querySelector(".VideoPlayer").childNodes[0];
		if (childElm && childElm.tagName !== "VIDEO") {
			childElm.style.visibility = "hidden";
			setTimeout(() => {
				childElm.style.visibility = "visible";
			}, 300);
		}
	}, [videoPlaylist, videoIndex]); // fake loading

	return (
		<ReactPlayer
			className="VideoPlayer"
			url={videoData[videoPlaylist][videoIndex].link}
			volume={videoVolume}
			muted={videoMuted}
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
}
