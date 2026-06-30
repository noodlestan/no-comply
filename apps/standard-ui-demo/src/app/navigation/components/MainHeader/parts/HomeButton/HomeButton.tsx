import { staticClassList } from '@no-comply/solid-primitives';
import { Icon, NavLink, Text } from '@no-comply/standard-ui';
import SquareMousePointerIcon from 'lucide-solid/icons/square-mouse-pointer';
import { type Component } from 'solid-js';

import { routeFor } from '../../../../routeFor';
import { $ID_APP_TITLE } from '../../private';

import styles from './HomeButton.module.scss';

export const HomeButton: Component = () => {
	return (
		<h1 classList={staticClassList(styles, 'HomeButton')} id={$ID_APP_TITLE}>
			<NavLink size="medium" href={routeFor.home()} nowrap compact>
				<Icon icon={SquareMousePointerIcon} size="medium" aria-hidden />
				<Text tag="span" variant="medium">
					Standard UI
				</Text>
			</NavLink>
		</h1>
	);
};
