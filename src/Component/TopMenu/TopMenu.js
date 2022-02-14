import React from "react";
import "./TopMenu.scss";
import {useAppContext} from "../../context/context";

export default function TopMenu() {
	const {videoPlaylist, showVideoPlaylist, setShowVideoPlaylist, showTaskBar, setShowTaskBar, darkMode, setDarkMode} = useAppContext();

	function handleShowVideoPlaylist() {
		setShowVideoPlaylist(!showVideoPlaylist);
	}

	function handleDarkMode() {
		setDarkMode(!darkMode);
		document.getElementsByTagName("html")[0].classList.toggle("darkMode");
	}

	function handleShowTaskBar() {
		setShowTaskBar(!showTaskBar);
	}

	return (
		<div className="TopMenu">
			<h1 className="TopMenu__heading" onClick={handleShowVideoPlaylist}>
				{videoPlaylist}
			</h1>
			<div className="TopMenu__wrapper">
				<button className="TopMenu__showTaskBar" onClick={handleShowTaskBar}>
					<ion-icon name={`${showTaskBar ? "eye" : "eye-off"}`}></ion-icon>
				</button>
				<button className={`TopMenu__darkmode ${darkMode ? "" : "light"}`} onClick={handleDarkMode}>
					<ion-icon name="moon" class={`TopMenu__darkmode__moon ${darkMode ? "goRight" : ""}`}></ion-icon>
					<ion-icon name="sunny" class={`TopMenu__darkmode__sun ${darkMode ? "" : "goLeft"}`}></ion-icon>
				</button>
			</div>
		</div>
	);
}
