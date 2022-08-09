import tag from 'classnames';
import styles from './index.module.scss';
import {} from 'components';
import {} from 'utils/types';
import { format } from 'utils/helper/formatTimeDuration';

interface ISong {
	name: string;
	link: string;
	artist: string;
	coverArtLink: string;
	id: number;
}

export interface ISongController {
	currentSong: ISong;
	playIcon: string;
	volumeIcon: string;
	handleShuffle: () => void;
	handlePreviousSong: () => void;
	handleNextSong: () => void;
	handleTogglePlay: () => void;
	handleLoop: () => void;
	handleSeek: () => void;
	handleMute: () => void;
	handleHide: () => void;
	handleChangeSongVolume: () => void;
	handleFullScreen: () => void;
}

function SongController({
	currentSong,
	playIcon,
	volumeIcon,
	handleShuffle,
	handlePreviousSong,
	handleNextSong,
	handleTogglePlay,
	handleLoop,
	handleSeek,
	handleMute,
	handleHide,
	handleChangeSongVolume,
	handleFullScreen,
}: ISongController) {
	return (
		<div className={tag(styles.SongController, styles.small)}>
			<div className={tag(styles.SongController__left)}>
				<img className={tag(styles.left__coverArt)} src={currentSong.coverArtLink} alt="SongCoverArt" draggable={false} />
				<div>
					<p className={tag(styles.left__name)}>{currentSong.name}</p>
					<p className={tag(styles.left__artist)}>{currentSong.artist}</p>
				</div>
			</div>
			<div className={tag(styles.SongController__center)}>
				<div className={tag(styles.center__top)}>
					<button className={tag(styles.center__shuffle)} onClick={handleShuffle}>
						<img src="./assets/btn/shuffle.svg" alt="shuffleButton" />
					</button>
					<button className={tag(styles.center__prev)} onClick={handlePreviousSong}>
						<img src="./assets/btn/prev.svg" alt="prevButton" />
					</button>
					<button className={tag(styles.center__play)} onClick={handleTogglePlay}>
						<img src={playIcon} alt="playButton" />
					</button>
					<button className={tag(styles.center__next)} onClick={handleNextSong}>
						<img src="./assets/btn/next.svg" alt="nextButton" />
					</button>
					<button className={tag(styles.center__loop)} onClick={handleLoop}>
						<img src="./assets/btn/loop.svg" alt="loopButton" />
					</button>
				</div>
				<div className={tag(styles.center__bottom)}>
					<time dateTime={`P${Math.round(0)}S`} className={tag(styles.time)}>
						{format(0)}
					</time>
					<div className="center__seekBar">
						<input type="range" name="song duration" defaultValue={0} min={0} max={100} className={tag(styles.center__duration)} onChange={handleSeek} />
						<div className={tag(styles.center__duration__loaded)}></div>
					</div>
					<time dateTime={`P${Math.round(300)}S`} className={tag(styles.time)}>
						{format(300)}
					</time>
				</div>
			</div>
			<div className={tag(styles.SongController__right)}>
				<button className={tag(styles.right__hide)} onClick={handleHide}>
					<img src="./assets/btn/down.svg" alt="hideButton" />
				</button>
				<button className={tag(styles.right__volume)} onClick={handleMute}>
					<img src={volumeIcon} alt="volumeButton" />
				</button>
				<div className={tag(styles.right__volume__slider)}>
					<input type="range" min={0} max={1} step={0.01} value={0} onChange={handleChangeSongVolume} />
					<div className="right__volume__slider__loaded"></div>
				</div>
				<button className={tag(styles.right__fullscreen)} onClick={handleFullScreen}>
					<img src="./assets/btn/fullscreen.svg" alt="fullscreen button" />
				</button>
			</div>
		</div>
	);
}

export default SongController;
