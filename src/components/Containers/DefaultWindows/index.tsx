import {ReactNode} from "react";
import tag from "classnames";
import styles from "./index.module.scss";
import {WindowsButton} from "components";
import {IWindowsButton} from "utils/types";

export interface IDefaultWindows extends IWindowsButton {
	nameWindows: string;
	bodyWindows: ReactNode;
}

function DefaultWindows({nameWindows, bodyWindows, handleClickClose, handleClickMinimize}: IDefaultWindows) {
	return (
		<div className={tag(styles.DW)}>
			<div className={tag(styles.DW__header)}>
				<WindowsButton handleClickClose={handleClickClose} handleClickMinimize={handleClickMinimize} />
				<h3 className={tag(styles.DW__header__name)}>{nameWindows}</h3>
			</div>
			<div className={tag(styles.DW__body)}>{bodyWindows}</div>
		</div>
	);
}

export default DefaultWindows;
