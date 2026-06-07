import type { ParentComponent } from 'solid-js';

import { Flex } from '../../../layout';
import { FieldsetLabel } from '../FieldsetLabel';

import type { FieldsetProps } from './types';

export const Fieldset: ParentComponent<FieldsetProps> = props => {
	return (
		<Flex direction="column" gap="xl" classList={props.classList}>
			<FieldsetLabel size={props.size}>{props.label}</FieldsetLabel>
			<Flex direction={props.direction} gap="l" wrap={props.wrap}>
				{props.children}
			</Flex>
		</Flex>
	);
};
