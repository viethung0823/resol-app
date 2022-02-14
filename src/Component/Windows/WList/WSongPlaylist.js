import {React, useRef} from "react";
import {useAppContext} from "../../../context/context";
import Wlist from "./Wlist";

export default function WSongPlaylist() {
	const {windowsSongPlaylistPosition, setWindowsSongPlaylistPosition, zIndex, setZIndex, songGenreData} = useAppContext();
	const nodeRef = useRef(null);

	return (
		<Wlist
			nodeRef={nodeRef}
			position={windowsSongPlaylistPosition}
			setPositon={setWindowsSongPlaylistPosition}
			zIndex={zIndex}
			setZIndex={setZIndex}
			parent="music settings"
			name="Music Library"
			listData={songGenreData}
		/>
	);
}
