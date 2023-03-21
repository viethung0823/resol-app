import tag from 'classnames';
import styles from './index.module.scss';
import { WindowsButton } from 'components';
import { IWindowsButton } from 'utils/types';
import { ReactNode } from 'react';

export interface ITabWindows extends IWindowsButton {
	nameWindows: string;
	bodyWindows: ReactNode;
}

function TabWindows({ nameWindows, bodyWindows, handleClickClose, handleClickMinimize }: ITabWindows) {
	return (
		<div className={tag(styles.TabWindows)}>
			<div className={tag(styles.TabWindows__sidebar)}>
				<WindowsButton handleClickClose={handleClickClose} handleClickMinimize={handleClickMinimize} />
				<div className={tag(styles.TabWindows__sidebar__settings)}>
					<p>a</p>
					<p>b</p>
					<p>c</p>
					<p>d</p>
				</div>
			</div>
			<div className={tag(styles.TabWindows__right)}>
				<h3 className={tag(styles.TabWindows__right__heading)}>{nameWindows}</h3>
				<div className={tag(styles.TabWindows__right__content)}>asdasd</div>
				<div className={tag(styles.TabWindows__right__content)}>asdasd</div>
				<div className={tag(styles.TabWindows__right__content)}>asdasd</div>
			</div>
		</div>
	);
}

export default TabWindows;
