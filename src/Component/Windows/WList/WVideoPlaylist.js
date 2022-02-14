import {React, useRef} from "react";
import {useAppContext} from "../../../context/context";
import Wlist from "./Wlist";

export default function WVideoPlaylist() {
	const {windowsVideoPlaylistPosition, setWindowsVideoPlaylistPosition, zIndex, setZIndex, videoGenreData} = useAppContext();
	const nodeRef = useRef(null);

	return (
		<Wlist
			nodeRef={nodeRef}
			position={windowsVideoPlaylistPosition}
			setPositon={setWindowsVideoPlaylistPosition}
			zIndex={zIndex}
			setZIndex={setZIndex}
			parent="video settings"
			name="Video Library"
			listData={videoGenreData}
		/>
	);
}
