import React from "react";
import {useAppContext} from "../../../../../context/context";
import "./WhiteNoise.scss";

export default function WhiteNoise() {
	const {soundData, activeSetting} = useAppContext();
	function handleSoundChange(e) {
		if (e.target.nextSibling.paused) {
			e.target.nextSibling.play();
		}
		e.target.nextSibling.volume = Number(e.target.value);
		e.target.nextSibling.nextSibling.style.width = `${Number(e.target.value) * 100}%`;
	}
	return (
		<div className={activeSetting === "White Noise" ? "" : "hide"}>
			{soundData.map((sound, idx) => (
				<div className="WhiteNoise" key={idx}>
					<h3 className="WhiteNoise__name">{sound.name}</h3>
					<div className="WhiteNoise__volume">
						<input className="WhiteNoise__volume__input" type="range" min={0} max={1} step={0.01} defaultValue={0} onChange={handleSoundChange} />
						<audio src={sound.link} loop preload="auto"></audio>
						<div className="WhiteNoise__volume__loaded"></div>
					</div>
				</div>
			))}
		</div>
	);
}
