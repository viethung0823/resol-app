import { useRef, useEffect, useState } from "react";
import styledComponents from "styled-components";
import Background from "./Component/Background/Background";
import Header from "./Component/Header/Header";
import Controller from "./Component/Controller/Controller";
import RightMenu from "./Component/RightMenu/RightMenu";
import LeftMenu from "./Component/LeftMenu/LeftMenu";
import InfoSong from "./Component/InfoSong/InfoSong";
import Pomodoro from "./Component/Pomodoro/Pomodoro";
import "./App.scss";

const TopLayer = styledComponents.div`
  position: relative;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
`;

function getRandomIndex(maxValue, exceptValue) {
  const randomIndex = Math.floor(Math.random() * maxValue);
  return randomIndex === exceptValue ? getRandomIndex(maxValue, exceptValue) : randomIndex;
}

function App() {
    const songPlayer = useRef();

    // Mode State
    const [darkMode, setDarkMode] = useState(false);

  // State --video
  const [videoVolumeState, setVideoVolumeState] = useState(0);

  // Video State
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoVolume, setVideoVolume] = useState(0);
  const [videoMuted, setVideoMuted] = useState(true);

  // Song State
  const [songGenre, setSongGenre] = useState("vpop");
  const [songListToRender, setSongListToRender] = useState("vpop");
  const [songArray, setSongArray] = useState(songData[songGenre]);
  const [songCoverArt, setSongCoverArt] = useState(songGenreCoverArt);
  const [songIndex, setSongIndex] = useState(0);
  const [songPlay, setSongPlay] = useState(false);
  const [songLoop, setSongLoop] = useState(false);
  const [songShuffle, setSongShuffle] = useState(false);
  const [songVolume, setSongVolume] = useState(0.5);
  const [songPlayed, setSongPlayed] = useState(0);
  const [songDuration, setSongDuration] = useState(0);

  // Playlist Sate
  const [playlist, setPlaylist] = useState("default");

  // Spotify
  const [spotifyURL, setSpotifyURL] = useState("https://open.spotify.com/embed/playlist/1BhbD0bcghfDallaM1Sg5W?si=4ee27efb0eb84e5b");
  return (
    <>
      <GlobalCSS />
      <VideoPlayer videoIndex={videoIndex} videoVolume={videoVolume} videoMuted={videoMuted} />
      <SongPlayer
        songPlayer={songPlayer}
        songArray={songArray}
        songIndex={songIndex}
        songVolume={songVolume}
        songPlay={songPlay}
        songLoop={songLoop}
        setSongPlayed={setSongPlayed}
        setSongDuration={setSongDuration}
        setSongIndex={setSongIndex}
      />

      <TopLayer>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        {showBottomMenu ? (
          <BottomMenu
            songPlayer={songPlayer}
            darkMode={darkMode}
            showBottomMenu={showBottomMenu}
            showSongPlaylist={showSongPlaylist}
            songGenre={songGenre}
            songArray={songArray}
            songIndex={songIndex}
            songPlay={songPlay}
            songLoop={songLoop}
            songShuffle={songShuffle}
            songVolume={songVolume}
            songPlayed={songPlayed}
            songDuration={songDuration}
            setSongPlay={setSongPlay}
            setSongLoop={setSongLoop}
            setSongShuffle={setSongShuffle}
            setSongVolume={setSongVolume}
            setSongIndex={setSongIndex}
            setSongArray={setSongArray}
            setSongListToRender={setSongListToRender}
            setShowBottomMenu={setShowBottomMenu}
            setShowSongPlaylist={setShowSongPlaylist}
            setShowHideBar={setShowHideBar}
          />
        ) : null}

        {showSongPlaylist ? (
          <SongPlaylist
            songListToRender={songListToRender}
            darkMode={darkMode}
            songCoverArt={songCoverArt}
            songArray={songArray}
            songIndex={songIndex}
            setSongIndex={setSongIndex}
            setShowSongPlaylist={setShowSongPlaylist}
          />
        ) : null}

        {showHideBar ? <HideBar showBottomMenu={showBottomMenu} setShowBottomMenu={setShowBottomMenu} setShowHideBar={setShowHideBar} /> : null}
      </TopLayer>
    </>
  );
}

export default App;
