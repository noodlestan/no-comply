import { staticClassList } from '@no-comply/solid-primitives';
import { Flex, Surface, type SurfaceVariant } from '@no-comply/standard-ui';
import { type ParentComponent } from 'solid-js';

import styles from './SurfaceVariantExample.module.scss';

type Props = {
	onVariant: SurfaceVariant;
};

export const SurfaceVariantExample: ParentComponent<Props> = props => {
	return (
		<Flex gap="s" classList={staticClassList(styles, 'SurfaceVariantExample')}>
			<Surface variant={props.onVariant}>
				<Flex padding="l">{props.children}</Flex>
			</Surface>
		</Flex>
	);
};
