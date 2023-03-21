import React from 'react';
import classNames from 'classnames';
import styles from './AppStyle.module.scss';
import './globalStyle.scss';
import VideoPlayerContainer from 'features/VideoPlayer/VideoPlayerContainer';
import SongPlayerContainer from 'features/SongPlayer/SongPlayerContainer';

function App() {
	const x = 'a';
	const y = 1;
	const z = 1;

	return (
		<div className={classNames(styles.App)}>
			<VideoPlayerContainer />
			<SongPlayerContainer />
		</div>
	);
}

export default App;
