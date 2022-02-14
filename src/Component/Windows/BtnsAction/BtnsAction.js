import React from "react";
import "./BtnsAction.scss";
import {useAppContext} from "../../../context/context";

export default function BtnsAction({parent, com}) {
	const {setShowWindowsSetting, setShowWindowsVideoPlaylist, setShowWindowsSongPlaylist} = useAppContext();
	function handleShowWindows() {
		switch (parent) {
			case "settings":
				setShowWindowsSetting(false);
				com.current.classList.add("hide");
				break;

			case "video settings":
				setShowWindowsVideoPlaylist(false);
				break;

			case "music settings":
				setShowWindowsSongPlaylist(false);
				break;

			default:
				break;
		}
	}

	return (
		<div className="BtnsAction">
			<button className="BtnsAction__close" onClick={handleShowWindows}>
				<ion-icon name="close-outline" class="BtnsAction__icon"></ion-icon>
			</button>
			<button className="BtnsAction__minize" onClick={handleShowWindows}>
				<ion-icon name="remove-outline" class="BtnsAction__icon"></ion-icon>
			</button>
			<button className="BtnsAction__zoom"></button>
		</div>
	);
}
