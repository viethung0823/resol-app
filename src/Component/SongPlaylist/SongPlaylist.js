import {React, useEffect, useRef, useState} from "react";
import styledComponents from "styled-components";
import "./SongPlaylist.scss";
import Draggable from "react-draggable";
import {useAppContext} from "../../context/context";

const CoverArt = styledComponents.div`
  position: relative;
  width: 100%;
  height: 160px;
  background: url(${(props) => props.background})  center top no-repeat;
  background-size: cover;
  border-radius: 16px 16px 0 0;
  cursor: pointer;

  &:hover {
    filter: grayscale(1);
  }
`;

export default function SongPlaylist() {
	const {
		songData,
		setSongData,
		songGenreData,
		songPlaylistToRender,
		darkMode,
		songPlaylist,
		songIndex,
		songPlay,
		setSongIndex,
		setSongPlaylist,
		setShowSongPlaylist,
		setSongPlay,
		songPlaylistPosition,
		setSongPlaylistPosition,
		zIndex,
		setZIndex,
	} = useAppContext();
	const nodeRef = useRef(null);
	const [smallPlayIcon, setSmallPlayIcon] = useState("./assests/btn/play.svg");
	const [waveformIcon, setWaveformIcon] = useState("./assests/btn/waveform.gif");
	const isSamePlaylist = songGenreData[songPlaylistToRender].name === songPlaylist;
	function handleActive(idx) {
		if (isSamePlaylist) {
			setSongIndex(idx);
			if (idx === songIndex) {
				setSongPlay(!songPlay);
			} else {
				setSongPlay(true);
			}
		} else {
			setSongPlaylist(songGenreData[songPlaylistToRender].name);
			setSmallPlayIcon("./assests/btn/pause.svg");
			setWaveformIcon("./assests/btn/waveform.gif");
			setSongIndex(idx);
			setSongPlay(true);
		}
		document.documentElement.style.setProperty("--clr-random", `#${Math.floor(Math.random() * 16777215).toString(16)}`);
	}

	function handlePlayPlaylist() {
		if (isSamePlaylist) {
			setSongPlay(!songPlay);
		} else {
			if (songData[songGenreData[songPlaylistToRender].name].length !== 0) {
				setSongPlaylist(songGenreData[songPlaylistToRender].name);
				setSmallPlayIcon("./assests/btn/pause.svg");
				setWaveformIcon("./assests/btn/waveform.gif");
				setSongIndex(0);
				setSongPlay(true);
			} else {
				console.log("no data");
			}
		}
	}

	function handleClickOutSide(e) {
		if (
			!e.target.closest(".VideoPlaylist") &&
			!e.target.closest(".SongPlaylist") &&
			!e.target.closest(".TopMenu") &&
			!e.target.closest(".BottomMenu") &&
			!e.target.closest(".Taskbar") &&
			!e.target.closest(".Wlist") &&
			!e.target.closest(".WSettings ") &&
			!e.target.closest(".HideBar")
		) {
			setShowSongPlaylist(false);
		}
	}

	function handleLike(e, idx, song) {
		e.stopPropagation();
		const newSongData = {...songData};
		newSongData[songGenreData[songPlaylistToRender].name][idx].liked = !newSongData[songGenreData[songPlaylistToRender].name][idx].liked;
		if (newSongData[songGenreData[songPlaylistToRender].name][idx].liked) {
			newSongData.liked.push(song);
		} else {
			newSongData.liked.splice(newSongData.liked.indexOf(song), 1);
		}
		setSongData(newSongData);
	}

	useEffect(() => {
		window.addEventListener("click", handleClickOutSide);
		return () => {
			window.removeEventListener("click", handleClickOutSide);
		};
	}, []);

	useEffect(() => {
		if (isSamePlaylist && songPlay) {
			setSmallPlayIcon("./assests/btn/pause.svg");
			setWaveformIcon("./assests/btn/waveform.gif");
		} else {
			setSmallPlayIcon("./assests/btn/play.svg");
			setWaveformIcon("./assests/btn/play.svg");
		}
	}, [songPlay, songPlaylistToRender]); // updatePlayIcon

	return (
		<Draggable
			nodeRef={nodeRef}
			cancel=".SongPlaylist__info,.SongPlaylist__playbtn"
			defaultPosition={songPlaylistPosition}
			onStart={() => {
				nodeRef.current.style.zIndex = zIndex;
				setZIndex((prev) => prev + 1);
			}}
			onStop={(e) => {
				setSongPlaylistPosition({x: e.layerX - e.offsetX, y: e.layerY - e.offsetY});
			}}
		>
			<div className="SongPlaylist" ref={nodeRef}>
				<CoverArt className="SongPlaylist__coverArt" background={songGenreData[songPlaylistToRender].link}>
					<button className="SongPlaylist__playbtn" onClick={handlePlayPlaylist}>
						<img src={smallPlayIcon} alt="play btn" className={`${darkMode ? "darkmode" : ""}`} />
					</button>
				</CoverArt>
				<div className="SongPlaylist__info">
					<h2 className="SongPlaylist__name">{songGenreData[songPlaylistToRender].name}</h2>
					<p className="SongPlaylist__des">{songGenreData[songPlaylistToRender].des}</p>
					<div className="SongPlaylist__list">
						<ul>
							{songData[songGenreData[songPlaylistToRender].name].map((song, idx) => (
								<li className={`SongPlaylist__song ${isSamePlaylist && idx === songIndex ? "active" : ""}`} key={idx} onClick={() => handleActive(idx)}>
									<div className="SongPlaylist__song__index">
										{isSamePlaylist && idx === songIndex ? <img src={waveformIcon} alt="wave form" /> : idx <= 9 ? `0${idx}` : idx}
									</div>
									<div className="SongPlaylist__wrapper">
										<div className="SongPlaylist__song__name">{song.name}</div>
										<div className="SongPlaylist__song__artis">{song.artis}</div>
									</div>
									<button className="SongPlaylist__song__likeBtn" onClick={(e) => handleLike(e, idx, song)}>
										<ion-icon
											name={`${song.liked ? "heart" : "heart-outline"}`}
											class={`SongPlaylist__song__likeBtn__icon ${song.liked ? "liked" : ""}`}
										></ion-icon>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Draggable>
	);
}
