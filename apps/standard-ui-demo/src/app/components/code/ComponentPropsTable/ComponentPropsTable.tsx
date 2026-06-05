import { Flex } from '@no-comply/standard-ui';
import { type Component, For } from 'solid-js';

import { ComponentPropsRow } from '../ComponentPropsRow';

import type { ComponentPropsTableProps } from './types';

export const ComponentPropsTable: Component<ComponentPropsTableProps> = props => {
	return (
		<Flex gap="l">
			<For each={props.props}>
				{prop => <ComponentPropsRow component={props.component} prop={prop} />}
			</For>
		</Flex>
	);
};
