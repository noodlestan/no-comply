import { shortId, staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { Spinner } from '../../atoms';
import { SplashBox } from '../SplashBox';

import styles from './AppSplash.module.scss';

export const AppSplash: Component = () => {
	const labelId = shortId();
	return (
		<div classList={staticClassList(styles, 'AppSplash')}>
			<Surface tag="main" variant="page" aria-labelledby={labelId}>
				<Flex direction="column" align="center" justify="center" stretch="full">
					<Flex data-splash-box direction="column" align="center" justify="center">
						<SplashBox labelId={labelId} />
					</Flex>
					<div data-splash-spinner>
						<Spinner speed="slow" size="l" when={true} />
					</div>
				</Flex>
			</Surface>
		</div>
	);
};
