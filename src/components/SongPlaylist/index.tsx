import tag from "classnames";
import styles from "./index.module.scss";
import {} from "components";
import {} from "utils/types";

export interface ISongPlaylist {}

function SongPlaylist({}: ISongPlaylist) {
	return (
		<div className={tag(styles.SongPlaylist)}>
			<div className={tag(styles.SongPlaylist__info)}>
				<h2 className={tag(styles.SongPlaylist__name)}>{}</h2>
				<p className={tag(styles.SongPlaylist__des)}>{}</p>
				<div className={tag(styles.SongPlaylist__list)}></div>
			</div>
		</div>
	);
}

export default SongPlaylist;
