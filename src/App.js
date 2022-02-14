import "./App.scss";
import styledComponents from "styled-components";
import VideoPlayer from "./Component/VideoPlayer/VideoPlayer";
import SongPlayer from "./Component/SongPlayer/SongPlayer";
import VideoPlaylist from "./Component/VideoPlaylist/VideoPlaylist";
import SongPlaylist from "./Component/SongPlaylist/SongPlaylist";
import TopMenu from "./Component/TopMenu/TopMenu";
import BottomMenu from "./Component/BottomMenu/BottomMenu";
import HideBar from "./Component/HideBar/HideBar";
import Taskbar from "./Component/Taskbar/Taskbar";
import WSettings from "./Component/Windows/WSettings/WSettings";
import WVideoPlaylist from "./Component/Windows/WList/WVideoPlaylist";
import WSongPlaylist from "./Component/Windows/WList/WSongPlaylist";
import {useAppContext} from "./context/context";
import {NhacCuaTui, getSong, searchByKeyword} from "nhaccuatui-api-full";
import Pomodoro from "./Component/Pomodoro/Pomodoro";

const TopLayer = styledComponents.div`
  position: relative;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
`;

function App() {
	const {showVideoPlaylist, showSongPlaylist, showBottomMenu, showTaskBar, showWindowsVideoPlaylist, showWindowSongPlaylist, showHideBar} = useAppContext();
	return (
		<>
			<VideoPlayer />
			<SongPlayer />
			<TopLayer>
				<TopMenu />
				{showVideoPlaylist ? <VideoPlaylist /> : null}
				{showSongPlaylist ? <SongPlaylist /> : null}
				{showBottomMenu ? <BottomMenu /> : null}
				{showTaskBar ? <Taskbar /> : null}
				{showHideBar ? <HideBar /> : null}
				{showWindowsVideoPlaylist ? <WVideoPlaylist /> : null}
				{showWindowSongPlaylist ? <WSongPlaylist /> : null}
				<WSettings />
			</TopLayer>
		</>
	);
}

export default App;
