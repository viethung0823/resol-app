import React from "react";
import Button from "./Button";
import "./Taskbar.scss";
import {useAppContext} from "../../context/context";

export default function Taskbar() {
	const {darkMode, showWindowsSetting, showWindowsVideoPlaylist, showWindowSongPlaylist} = useAppContext();
	const appsIcon = document.querySelectorAll(".Taskbar__button>img");
	function handleEnter() {
		appsIcon.forEach((icon) => {
			icon.style.transition = "0.2s ease-out";
		});
	}

	function handleHover(e) {
		appsIcon.forEach((icon) => {
			const top = icon.getBoundingClientRect().top + icon.getBoundingClientRect().height / 2;
			const maxDistance = 160;
			const distance = Math.abs(e.clientY - top);
			let sizeToChange = distance < maxDistance ? 48 + (maxDistance - distance) * 0.2 + "px" : 48 + "px";
			let marginLeftToChange = distance < maxDistance ? -(maxDistance - distance) * 0.2 + "px" : 0 + "px";
			icon.style.width = sizeToChange;
			icon.style.marginLeft = marginLeftToChange;
			icon.style.transition = "unset";
		});
	}

	function handleLeave() {
		appsIcon.forEach((icon) => {
			icon.style.width = 48 + "px";
			icon.style.marginLeft = "0";
			icon.style.transition = "0.2s ease-out";
		});
	}

	return (
		<div className="Taskbar" onMouseEnter={handleEnter} onMouseMove={handleHover} onMouseLeave={handleLeave}>
			<Button isWindowsActive={showWindowsSetting} name="settings" link={`${darkMode ? "./assests/taskbar/settings_dark.png" : "./assests/taskbar/settings.png"}`}></Button>
			<Button
				isWindowsActive={showWindowsVideoPlaylist}
				name="video settings"
				link={`${darkMode ? "./assests/taskbar/video_dark.png" : "./assests/taskbar/video.png"}`}
			></Button>
			<Button
				isWindowsActive={showWindowSongPlaylist}
				name="music settings"
				link={`${darkMode ? "./assests/taskbar/music_dark.png" : "./assests/taskbar/music.png"}`}
			></Button>
			<Button name="youtube" link={`${darkMode ? "./assests/taskbar/youtube_dark.png" : "./assests/taskbar/youtube.png"}`}></Button>
			<Button name="spotify embeded" link={`${darkMode ? "./assests/taskbar/spotify_dark.png" : "./assests/taskbar/spotify.png"}`}></Button>
			<Button name="pomodoro" link={`${darkMode ? "./assests/taskbar/pomo_dark.png" : "./assests/taskbar/pomo.png"}`}></Button>
			<Button name="todo" link={`${darkMode ? "./assests/taskbar/todo_dark.png" : "./assests/taskbar/todo.png"}`}></Button>
			<Button name="trash" link={`${darkMode ? "./assests/taskbar/trash_dark.png" : "./assests/taskbar/trash.png"}`}></Button>
		</div>
	);
}
