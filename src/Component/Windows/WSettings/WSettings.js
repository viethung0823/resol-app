import {React, useRef, useEffect} from "react";
import "./WSettings.scss";
import BtnsAction from "../BtnsAction/BtnsAction";
import SettingItem from "./SettingItem/SettingItem";
import WhiteNoise from "./SettingContent/WhiteNoise/WhiteNoise";
import AboutMe from "./SettingContent/AboutMe/AboutMe";
import Draggable from "react-draggable";
import {useAppContext} from "../../../context/context";

export default function WSettings() {
	const {windowsSettingPosition, setWindowsSettingPosition, zIndex, setZIndex} = useAppContext();
	const nodeRef = useRef(null);

	useEffect(() => {
		nodeRef.current.classList.add("hide");
	}, []);

	return (
		<Draggable
			nodeRef={nodeRef}
			cancel=".WSettings__sidebar__settings,.WSettings__right__content,.BtnsAction"
			defaultPosition={windowsSettingPosition}
			onStart={() => {
				nodeRef.current.style.zIndex = zIndex;
				setZIndex((prev) => prev + 1);
			}}
			onStop={(e) => {
				setWindowsSettingPosition({x: e.layerX - e.offsetX, y: e.layerY - e.offsetY});
			}}
		>
			<div className="WSettings " ref={nodeRef}>
				<div className="WSettings__sidebar">
					<BtnsAction parent="settings" com={nodeRef} />
					<div className="WSettings__sidebar__settings">
						<SettingItem icon="musical-notes-outline" name="White Noise" />
						<SettingItem icon="game-controller-outline" name="Song Controller" />
						<SettingItem icon="desktop-outline" name="Mode" />
						<SettingItem icon="information-circle-outline" name="About Me" />
					</div>
				</div>
				<div className="WSettings__right">
					<h3 className="WSettings__right__heading">Settings Preferences</h3>
					<div className="WSettings__right__content">
						<WhiteNoise />
						<AboutMe />
					</div>
				</div>
			</div>
		</Draggable>
	);
}
