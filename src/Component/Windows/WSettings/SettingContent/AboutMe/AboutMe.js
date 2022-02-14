import React from "react";
import {useAppContext} from "../../../../../context/context";
import "./AboutMe.scss";
export default function AboutMe() {
	const {activeSetting} = useAppContext();
	return (
		<p className={activeSetting === "About Me" ? "AboutMe" : " AboutMe hide"}>
			Hi! This website is built by me who really realy really like music and it's still in progress so lagging and bug might occur, please let's me know❤{" "}
		</p>
	);
}
