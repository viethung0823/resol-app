import {createContext, useContext, useState, useRef} from "react";
import videoGenreArr from "../data/videoGenreData.json";
import songGenreArr from "../data/songGenreData.json";
import videoObj from "../data/videoData.json";
import songObj from "../data/songData.json";
import soundArr from "../data/soundData.json";

const AppContext = createContext();

const useAppContext = () => {
	return useContext(AppContext);
};

const AppProvider = ({children}) => {
	// data
	const [videoData, setVideoData] = useState(videoObj);
	const [soundData, setSoundData] = useState(soundArr);
	const [songData, setSongData] = useState(songObj);
	const [songGenreData, setSongGenreData] = useState(songGenreArr);
	const [videoGenreData, setVideoGenreData] = useState(videoGenreArr);
	// mode
	const [darkMode, setDarkMode] = useState(false);
	// show
	const [showVideoPlaylist, setShowVideoPlaylist] = useState(false);
	const [showSongPlaylist, setShowSongPlaylist] = useState(false);
	const [showBottomMenu, setShowBottomMenu] = useState(true);
	const [showTaskBar, setShowTaskBar] = useState(true);
	const [showWindowsSetting, setShowWindowsSetting] = useState(false);
	const [showWindowsVideoPlaylist, setShowWindowsVideoPlaylist] = useState(false);
	const [showWindowSongPlaylist, setShowWindowsSongPlaylist] = useState(false);
	const [showHideBar, setShowHideBar] = useState(false);
	// video
	const [videoPlaylist, setVideoPlaylist] = useState("van gogh's world");
	const [videoPlaylistToRender, setVideoPlaylistToRender] = useState("van gogh's world");
	const [videoIndex, setVideoIndex] = useState(0);
	const [videoVolume, setVideoVolume] = useState(0);
	const [videoMuted, setVideoMuted] = useState(true);
	// song
	const [songPlaylist, setSongPlaylist] = useState("classical");
	const [songPlaylistToRender, setSongPlaylistToRender] = useState(0);
	const [songIndex, setSongIndex] = useState(0);
	const [songPlay, setSongPlay] = useState(false);
	const [songLoop, setSongLoop] = useState(false);
	const [songShuffle, setSongShuffle] = useState(false);
	const [songVolume, setSongVolume] = useState(0.5);
	const [songPlayedTime, setSongPlayedTime] = useState(0);
	const [songDurationTime, setSongDurationTime] = useState(0);
	// others
	const [spotifyURL, setSpotifyURL] = useState("https://open.spotify.com/embed/playlist/1BhbD0bcghfDallaM1Sg5W?si=4ee27efb0eb84e5b");
	const [songPlaylistPosition, setSongPlaylistPosition] = useState({x: 0, y: 0});
	const [windowsSettingPosition, setWindowsSettingPosition] = useState({x: 0, y: 0});
	const [windowsVideoPlaylistPosition, setWindowsVideoPlaylistPosition] = useState({x: -244, y: 0});
	const [windowsSongPlaylistPosition, setWindowsSongPlaylistPosition] = useState({x: -1, y: 80});
	const [activeSetting, setActiveSetting] = useState("White Noise");
	const [zIndex, setZIndex] = useState(1000);
	const songPlayerCom = useRef();

	return (
		<AppContext.Provider
			value={{
				videoData,
				soundData,
				songData,
				setSongData,
				songGenreData,
				videoGenreData,
				darkMode,
				setDarkMode,
				showVideoPlaylist,
				setShowVideoPlaylist,
				showBottomMenu,
				setShowBottomMenu,
				showSongPlaylist,
				setShowSongPlaylist,
				showTaskBar,
				setShowTaskBar,
				showWindowsSetting,
				setShowWindowsSetting,
				showWindowsVideoPlaylist,
				setShowWindowsVideoPlaylist,
				showWindowSongPlaylist,
				setShowWindowsSongPlaylist,
				showHideBar,
				setShowHideBar,
				videoPlaylist,
				setVideoPlaylist,
				videoPlaylistToRender,
				setVideoPlaylistToRender,
				videoIndex,
				setVideoIndex,
				videoVolume,
				setVideoVolume,
				videoMuted,
				setVideoMuted,
				songPlaylist,
				setSongPlaylist,
				songPlaylistToRender,
				setSongPlaylistToRender,
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
				setSongPlayedTime,
				songDurationTime,
				setSongDurationTime,
				songPlaylistPosition,
				setSongPlaylistPosition,
				windowsSettingPosition,
				setWindowsSettingPosition,
				windowsVideoPlaylistPosition,
				setWindowsVideoPlaylistPosition,
				windowsSongPlaylistPosition,
				setWindowsSongPlaylistPosition,
				activeSetting,
				setActiveSetting,
				zIndex,
				setZIndex,
				songPlayerCom,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export {AppProvider, useAppContext};
