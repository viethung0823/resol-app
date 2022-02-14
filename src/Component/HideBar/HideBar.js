import React from "react";
import "./HideBar.scss";
import {useAppContext} from "../../context/context";

export default function HideBar() {
	const {showBottomMenu, setShowBottomMenu, setShowHideBar} = useAppContext();

	function handleShowBottomMenu() {
		setShowBottomMenu(!showBottomMenu);
		setShowHideBar(false);
	}

	return <div className="HideBar" onClick={handleShowBottomMenu}></div>;
}
