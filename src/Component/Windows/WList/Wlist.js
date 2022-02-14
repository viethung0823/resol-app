import {React} from "react";
import styledComponents from "styled-components";
import BtnsAction from "../BtnsAction/BtnsAction";
import Draggable from "react-draggable";
import "./WList.scss";
import {useAppContext} from "../../../context/context";

const ListItem = styledComponents.div`
  background: url(${(props) => props.background}) center no-repeat;
	background-size: cover;
`;

export default function Wlist({nodeRef, position, setPositon, zIndex, setZIndex, parent, name, listData}) {
	const {videoPlaylistToRender, setVideoPlaylistToRender, setShowVideoPlaylist, setShowSongPlaylist, songPlaylistToRender, setSongPlaylistToRender} = useAppContext();
	function handeChangePlaylist(playlist, idx) {
		switch (name) {
			case "Video Library":
				setVideoPlaylistToRender(playlist.toLowerCase());
				setShowVideoPlaylist(true);
				break;

			case "Music Library":
				setSongPlaylistToRender(idx);
				setShowSongPlaylist(true);
				break;

			default:
				break;
		}
	}

	return (
		<Draggable
			nodeRef={nodeRef}
			cancel=".Wlist__body"
			defaultPosition={position}
			onStart={() => {
				nodeRef.current.style.zIndex = zIndex;
				setZIndex((prev) => prev + 1);
			}}
			onStop={(e) => {
				setPositon({x: e.layerX - e.offsetX, y: e.layerY - e.offsetY});
			}}
		>
			<div className="Wlist" ref={nodeRef}>
				<div className="Wlist__header">
					<BtnsAction parent={parent} com={nodeRef} />
					<h3 className="Wlist__header__name">{name}</h3>
				</div>
				<div className="Wlist__body">
					{listData.map((data, idx) => (
						<ListItem
							className={`Wlist__body__item ${
								name === "Video Library" ? (data.name.toLowerCase() === videoPlaylistToRender ? "active" : "") : idx === songPlaylistToRender ? "active" : ""
							}`}
							background={data.link}
							key={idx}
							onClick={() => handeChangePlaylist(data.name, idx)}
						>
							<p className="Wlist__body__item__name">{data.name}</p>
						</ListItem>
					))}
				</div>
			</div>
		</Draggable>
	);
}
