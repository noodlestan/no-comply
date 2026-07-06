import { createAriaRegion } from '@no-comply/solid-accessibility';
import { SurfaceBase } from '@no-comply/solid-composables';
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Flex } from '@no-comply/standard-ui';
import { type Component } from 'solid-js';

import { DebugContextTreePanel } from '../../panels';

import styles from './DebugDrawer.module.scss';

export const DebugDrawer: Component = () => {
	const region = createAriaRegion();

	return (
		<div classList={staticClassList(styles, 'DebugDrawer')}>
			<SurfaceBase variant="card" {...region.$root}>
				<Flex direction="column" padding="l" gap="m">
					<Display level={3} {...region.$label}>
						Debug
					</Display>
					<DebugContextTreePanel />
				</Flex>
			</SurfaceBase>
		</div>
	);
};
