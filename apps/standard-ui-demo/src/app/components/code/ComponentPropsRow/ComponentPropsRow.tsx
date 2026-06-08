/* eslint-disable dot-notation */
import type { ComponentEntityData } from '@no-comply/meta-entities';
import { staticClassList } from '@no-comply/solid-primitives';
import { Display, Flex, Link, Text } from '@no-comply/standard-ui';
import type { EntityDataBase } from '@purrception/primitives';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, Show } from 'solid-js';

import { routeFor } from '../../../navigation';
import { CodeDocDescription } from '../CodeDocDescription';
import type { ComponentProp } from '../types';

import styles from './ComponentPropsRow.module.scss';

type Props = {
	component: ComponentEntityData;
	entity?: EntityDataBase;
	prop: ComponentProp;
	showDocs: boolean;
	showGroups: boolean;
};

export const ComponentPropsRow: Component<Props> = props => {
	const rowHeaderClassList = staticClassList(styles, ['RowHeader']);

	const defaultValue = () => {
		const tag = props.prop.node.tags?.['default'];
		if (tag) {
			return typeof tag === 'string' ? tag : tag;
		}
	};

	const typeRef = () => {
		const _source = props.prop.node.type._source;
		return _source?.ref || '';
	};

	const sourceHref = () => {
		const entity = props.entity;
		const ref = typeRef();
		return entity ? `${routeFor.entity(entity)}#${ref}` : ref;
	};

	return (
		<Flex direction="column" gap="m">
			<Flex direction="row" gap="s" align="baseline" classList={rowHeaderClassList}>
				<Flex direction="column" flex={1}>
					<Display level={5}>{props.prop.name}</Display>
				</Flex>
				<div>{props.prop.node.optional ? 'optional' : 'mandatory'}</div>
				<Show when={defaultValue()}>
					<Text variant="small">(default: {defaultValue()})</Text>
				</Show>
			</Flex>
			<Show when={props.showDocs && props.prop.node.description}>
				<CodeDocDescription node={props.prop.node} />
			</Show>
			<Show when={props.showDocs}>
				<Show when={!props.showGroups}>
					<Text>
						Composed from <Link href={sourceHref()}>{typeRef()}</Link>
					</Text>
				</Show>
				<Flex direction="row" align="baseline" gap="s">
					<Text>type:</Text>
					<CodeBlock lang="ts" nodes={[props.prop.node.type as object]} context={props.component} />
				</Flex>
			</Show>
		</Flex>
	);
};
