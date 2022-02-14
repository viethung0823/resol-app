import React from "react";
import {useAppContext} from "../../../../context/context";

export default function SettingItem({icon, name}) {
	const {activeSetting, setActiveSetting} = useAppContext();
	function handleShowContent(name) {
		setActiveSetting(name);
	}

	return (
		<div className={`WSettings__sidebar__settings__item ${activeSetting === name ? "active" : ""}`} onClick={() => handleShowContent(name)}>
			<ion-icon name={icon} class="WSettings__sidebar__settings__icon"></ion-icon>
			<p className="WSettings__sidebar__settings__name">{name}</p>
		</div>
	);
}
