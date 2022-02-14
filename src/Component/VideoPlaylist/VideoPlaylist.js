import {React} from "react";
import "./VideoPlaylist.scss";
import {useAppContext} from "../../context/context";

export default function VideoPlaylist() {
	const {videoData, videoPlaylistToRender, videoPlaylist, videoIndex, setVideoPlaylist, setVideoIndex} = useAppContext();

	function handleChangeVideo(idx) {
		setVideoPlaylist(videoPlaylistToRender);
		setVideoIndex(idx);
	}
	return (
		<div className="VideoPlaylist">
			<ul>
				{videoData[videoPlaylistToRender].map((video, idx) => (
					<li
						key={idx}
						className={`VideoPlaylist__item ${videoPlaylist === videoPlaylistToRender ? (idx === videoIndex ? "active" : "") : ""}`}
						onClick={() => handleChangeVideo(idx)}
					>
						<ion-icon name={videoPlaylist === videoPlaylistToRender ? (idx === videoIndex ? "radio" : "play") : "play"} class="VideoPlaylist__item__icon"></ion-icon>
						<p className="VideoPlaylist__item__name">{video.name}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
