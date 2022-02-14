import {React} from "react";
import {useAppContext} from "../../context/context";

export default function Button({name, link, isWindowsActive}) {
	const {showWindowsSetting, setShowWindowsSetting, showWindowsVideoPlaylist, setShowWindowsVideoPlaylist, showWindowSongPlaylist, setShowWindowsSongPlaylist} = useAppContext();
	function handleShowWindows() {
		switch (name) {
			case "settings":
				setShowWindowsSetting(!showWindowsSetting);
				document.querySelector(".WSettings").classList.toggle("hide");
				break;

			case "video settings":
				setShowWindowsVideoPlaylist(!showWindowsVideoPlaylist);
				break;

			case "music settings":
				setShowWindowsSongPlaylist(!showWindowSongPlaylist);
				break;

			default:
				break;
		}
	}

	return (
		<button className={`Taskbar__button ${isWindowsActive ? "active" : ""}`} onClick={handleShowWindows}>
			<img src={link} alt={name} className="Taskbar__icon" />
		</button>
	);
}
