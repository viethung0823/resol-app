import classNames from "classnames";
import styles from "./AppStyle.module.scss";
import "./globalStyle.scss";
import {VideoPlayer, SongPlayer, DefaultWindows, TabWindows} from "components";

function App() {
	return (
		<div className={classNames(styles.App)}>
			{/* <VideoPlayer /> */}
			{/* <DefaultWindows
				bodyWindows
				handleClickClose={() => {
					console.log(1);
				}}
				handleClickMinimize={() => {
					console.log(1);
				}}
				nameWindows="asda"
			/> */}
			<TabWindows
				bodyWindows
				nameWindows="okok"
				handleClickClose={() => {
					console.log(1);
				}}
				handleClickMinimize={() => {
					console.log(1);
				}}
			/>
			<SongPlayer />
		</div>
	);
}

export default App;
