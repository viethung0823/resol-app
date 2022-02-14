import {useRef, useEffect, useState, React} from "react";
import "./BottomMenu.scss";
import Duration from "../Duration/Duration";
import {useAppContext} from "../../context/context";

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	}, [value]);
	return ref.current;
}

function getRandomIndex(maxValue, compareValue) {
	const randomIndex = Math.floor(Math.random() * maxValue);
	return randomIndex <= compareValue ? getRandomIndex(maxValue, compareValue) : randomIndex;
}

export default function BottomMenu() {
	console.log("render1");
	const {
		songData,
		setSongData,
		darkMode,
		showSongPlaylist,
		setSongPlaylistToRender,
		setShowBottomMenu,
		setShowSongPlaylist,
		setShowHideBar,
		songPlaylist,
		songIndex,
		setSongIndex,
		songPlay,
		setSongPlay,
		songLoop,
		setSongLoop,
		songShuffle,
		setSongShuffle,
		songVolume,
		setSongVolume,
		songPlayedTime,
		songDurationTime,
		songPlayerCom,
	} = useAppContext();
	const [playIcon, setPlayIcon] = useState("./assests/btn/play.svg");
	const [volumeIcon, setVolumeIcon] = useState("./assests/btn/volume-medium.svg");
	const right__volume__slider__loaded = useRef();
	const center__duration__loaded = useRef();
	const playedInput = useRef();
	const BottomMenuCom = useRef();
	const prevSongVolume = usePrevious(songVolume);
	const prevSongData = usePrevious(songData);

	function handleShuffle() {
		setSongShuffle(!songShuffle);
		const newArr = [...songData[songPlaylist]];

		if (!songShuffle) {
			let currentIndex = songData[songPlaylist].length;
			let randomIndex;
			while (currentIndex != 0) {
				randomIndex = getRandomIndex(songData[songPlaylist].length, songIndex);
				currentIndex--;
				if (currentIndex === songIndex + 1) break;
				[newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
			}
			const newSongData = {...songData};
			newSongData[songPlaylist] = newArr;
			setSongData(newSongData);
		} else {
			setSongData(prevSongData);
		}
	} // bug

	function handleLoop() {
		setSongLoop(!songLoop);
	}

	function handlePlay() {
		if (songPlay) {
			setSongPlay(false);
			setPlayIcon("./assests/btn/play.svg");
		} else {
			setSongPlay(true);
			setPlayIcon("./assests/btn/pause.svg");
		}
	}

	function handleChangeIndex(order) {
		if (songLoop) {
			setSongLoop(false);
		}

		switch (order) {
			case "prev":
				songIndex === 0 ? setSongIndex(songData[songPlaylist].length - 1) : setSongIndex((prevIndex) => prevIndex - 1);
				break;

			case "next":
				songIndex === songData[songPlaylist].length - 1 ? setSongIndex(0) : setSongIndex((prevIndex) => prevIndex + 1);
				break;

			default:
				break;
		}
	}

	function handleSeek(e) {
		center__duration__loaded.current.style.width = `${e.target.value}%`;
		songPlayerCom.current.seekTo(Number(Math.floor((e.target.value * songDurationTime) / 100)));
	}

	function handleSongVolume(e) {
		setSongVolume(Number(e.target.value));
	}

	function handleMute() {
		songVolume === 0 ? setSongVolume(prevSongVolume) : setSongVolume(0);
	}

	function handleFullScreen() {
		document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
	}

	function handleHide() {
		BottomMenuCom.current.classList.add("goDown");
		setTimeout(() => {
			setShowHideBar(true);
			setShowBottomMenu(false);
		}, 350);
	}

	function handleHideSongPlaylist() {
		setSongPlaylistToRender(Object.keys(songData).indexOf(songPlaylist));
		setShowSongPlaylist(!showSongPlaylist);
	}

	useEffect(() => {
		console.log(songVolume);
		console.log(prevSongVolume);
	}, [prevSongVolume]);

	useEffect(() => {
		console.log(songVolume);
		console.log(prevSongVolume);

		if (songVolume === 0) {
			setVolumeIcon("./assests/btn/volume-mute.svg");
		} else if (songVolume >= 0.01 && songVolume <= 0.33) {
			setVolumeIcon("./assests/btn/volume-low.svg");
		} else if (songVolume >= 0.34 && songVolume <= 0.66) {
			setVolumeIcon("./assests/btn/volume-medium.svg");
		} else {
			setVolumeIcon("./assests/btn/volume-high.svg");
		}
		right__volume__slider__loaded.current.style.width = `${songVolume * 100}%`;
	}, [songVolume]);

	// Update the PlayIcon state when click hide SongController
	useEffect(() => {
		songPlay ? setPlayIcon("./assests/btn/pause.svg") : setPlayIcon("./assests/btn/play.svg");
	}, [songPlay]);

	useEffect(() => {
		if ((songPlayedTime / songDurationTime) * 100) {
			playedInput.current.value = (songPlayedTime / songDurationTime) * 100;
		} else {
			playedInput.current.value = 0;
		}
		center__duration__loaded.current.style.width = `${(Math.floor(songPlayedTime) / songDurationTime) * 100}%`;
	}, [songPlayedTime]); // bug

	return (
		<div className="BottomMenu small" ref={BottomMenuCom}>
			<div className="BottomMenu__left">
				<img className="left__coverArt" src={songData[songPlaylist][songIndex].coverArt} alt="CoverArt" draggable={false} onClick={handleHideSongPlaylist} />
				<div>
					<p className="left__name">{songData[songPlaylist][songIndex].name}</p>
					<p className="left__artist">{songData[songPlaylist][songIndex].artis}</p>
				</div>
			</div>
			<div className="BottomMenu__center">
				<div className="center__top">
					<button className={`center__shuffle ${songShuffle ? "activeBtn" : darkMode ? "darkmode" : "lightModeSmallIcon"}`} onClick={handleShuffle}>
						<img src="./assests/btn/shuffle.svg" alt="shuffle button" />
					</button>
					<button className={`center__prev ${darkMode ? "darkmode" : ""}`} onClick={() => handleChangeIndex("prev")}>
						<img src="./assests/btn/prev.svg" alt="prev button" />
					</button>
					<button className={`center__play`} onClick={handlePlay}>
						<img src={playIcon} alt="play button" />
					</button>
					<button className={`center__next ${darkMode ? "darkmode" : ""}`} onClick={() => handleChangeIndex("next")}>
						<img src="./assests/btn/next.svg" alt="next button" />
					</button>
					<button className={`center__loop ${songLoop ? "activeBtn" : darkMode ? "darkmode" : "lightModeSmallIcon"}`} onClick={handleLoop}>
						<img src="./assests/btn/loop.svg" alt="loop button" />
					</button>
				</div>
				<div className="center__bottom">
					<Duration seconds={songPlayedTime} />
					<div className="center__seekBar">
						<input type="range" name="song duration" defaultValue={0} min={0} max={100} className="center__duration" onChange={handleSeek} ref={playedInput} />
						<div className="center__duration__loaded" ref={center__duration__loaded}></div>
					</div>
					<Duration seconds={songDurationTime} />
				</div>
			</div>
			<div className="BottomMenu__right">
				<button className={`right__hide ${darkMode ? "darkmode" : "lightModeSmallIcon"}`} onClick={handleHide}>
					<img src="./assests/btn/down.svg" alt="hide button" />
				</button>
				<button className={`right__volume ${darkMode ? "darkmode" : "lightModeSmallIcon"}`} onClick={handleMute}>
					<img src={volumeIcon} alt="volumne button" />
				</button>
				<div className="right__volume__slider">
					<input type="range" min={0} max={1} step={0.01} value={songVolume} onChange={handleSongVolume} />
					<div className="right__volume__slider__loaded" ref={right__volume__slider__loaded}></div>
				</div>
				<button className={`right__fullscreen ${darkMode ? "darkmode" : "lightModeSmallIcon"}`} onClick={handleFullScreen}>
					<img src="./assests/btn/fullscreen.svg" alt="fullscreen button" />
				</button>
			</div>
		</div>
	);
}
