/* eslint-disable dot-notation */
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Flex, Text } from '@no-comply/standard-ui';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, Show } from 'solid-js';

import { CodeDocDescription } from '../CodeDocDescription';

import styles from './ComponentPropsRow.module.scss';
import type { ComponentPropsRowProps } from './types';

export const ComponentPropsRow: Component<ComponentPropsRowProps> = props => {
	const rowHeaderClassList = staticClassList(styles, ['RowHeader']);

	const defaultValue = () => {
		const tag = props.prop.node.tags?.['default'];
		if (tag) {
			return typeof tag === 'string' ? tag : tag;
		}
	};

	return (
		<Flex direction="column" gap="m">
			<Flex direction="row" gap="s" align="baseline" classList={rowHeaderClassList}>
				<Flex direction="column" flex={1}>
					<Display level={4}>{props.prop.name}</Display>
				</Flex>
				<div>{props.prop.node.optional ? 'optional' : 'mandatory'}</div>
				<Show when={defaultValue()}>
					<Text variant="small">(default: {defaultValue()})</Text>
				</Show>
			</Flex>
			<Show when={props.prop.node.description}>
				<CodeDocDescription node={props.prop.node} />
			</Show>
			<Flex direction="row" align="baseline" gap="s">
				<Text>type:</Text>
				<CodeBlock lang="ts" nodes={[props.prop.node.type as object]} context={props.component} />
			</Flex>
		</Flex>
	);
};
