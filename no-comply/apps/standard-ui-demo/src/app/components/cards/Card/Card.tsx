import { createClassList } from '@no-comply/solid-primitives';
import { Flex, Surface } from '@no-comply/standard-ui';
import { type ParentComponent } from 'solid-js';

import styles from './Card.module.scss';

export const Card: ParentComponent = props => {
	const classList = createClassList(styles, () => ['Card']);

	return (
		<Surface variant="card-rounded" padding="s" classList={classList()}>
			<Flex direction="row" gap="s" align="center" justify="between">
				{props.children}
			</Flex>
		</Surface>
	);
};
