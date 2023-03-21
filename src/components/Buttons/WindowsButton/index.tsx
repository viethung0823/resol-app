import tag from 'classnames';
import styles from './index.module.scss';
import { VscClose, VscRemove } from 'utils/icon';

export interface IWindowsButton {
	handleClickClose: () => void;
	handleClickMinimize: () => void;
}

const WindowsButton = ({ handleClickClose, handleClickMinimize }: IWindowsButton) => {
	return (
		<div className={tag(styles.WB)}>
			<button className={tag(styles.WB__close)} onClick={handleClickClose}>
				<VscClose className={tag(styles.WB__icon)} />
			</button>
			<button className={tag(styles.WB__minimize)} onClick={handleClickMinimize}>
				<VscRemove className={tag(styles.WB__icon)} />
			</button>
			<button className={tag(styles.WB__zoom)}></button>
		</div>
	);
};

export default WindowsButton;
