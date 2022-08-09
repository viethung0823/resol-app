import { Fragment } from 'react';
import VideoPlayer from './index';
import { useAppDispatch } from 'app/hook';
import { changeVideoURL } from './slice';

function SongPlayerContainer() {
	const dispatch = useAppDispatch();

	return (
		<Fragment>
			<VideoPlayer />
		</Fragment>
	);
}

export default SongPlayerContainer;
