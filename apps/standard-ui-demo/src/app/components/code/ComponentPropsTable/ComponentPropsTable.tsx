import {
	type NoComplyEntityData,
	resolveComponentProps,
	resolveComponentPropsJsDocData,
} from '@no-comply/meta';
import { Flex } from '@no-comply/standard-ui';
import {
	type JsDocData,
	type ObjectLiteralTypeNode,
	createResolveTypeContext,
	resolveExpression,
} from '@purrception/lang-ts';
import { type Component, For, Show, createMemo } from 'solid-js';

import { getSymbolEntityMaybe } from '../../../../providers';
import { CodeDocDescription } from '../CodeDocDescription';

import { ComponentPropsTableGroup } from './parts';
import type { Props } from './parts';
import type { ComponentPropsGroup } from './types';

export const ComponentPropsTable: Component<Props> = props => {
	const componentProps = () => {
		const context = createResolveTypeContext(getSymbolEntityMaybe, props.component);
		return resolveExpression(
			context,
			resolveComponentProps(props.component),
		) as ObjectLiteralTypeNode;
	};

	const propsMembers = () => {
		return Object.entries(componentProps().members).map(([name, node]) => ({ name, node }));
	};

	const propsBySource = () => {
		return propsMembers().reduce(
			(acc, prop) => {
				const _source = prop.node.type._source;
				const typeRef = _source?.ref || '';
				acc[typeRef] = acc[typeRef] || {
					ref: typeRef,
					entity: _source?.entity as NoComplyEntityData,
					props: [],
				};
				acc[typeRef].props.push(prop);
				return acc;
			},
			{} as Record<string, ComponentPropsGroup>,
		);
	};

	const propsBySourceReversed = createMemo(() => Object.values(propsBySource()).reverse());

	return (
		<Flex tag="section" gap="m" direction="column">
			<Show when={props.showDocs && resolveComponentPropsJsDocData(props.component)}>
				<Flex tag="section" direction="column" aria-label="Props description">
					<CodeDocDescription node={resolveComponentPropsJsDocData(props.component) as JsDocData} />
				</Flex>
			</Show>
			<Flex tag="ul" gap="m" direction="column" aria-label="Props list">
				<For each={propsBySourceReversed()}>
					{(group, ix) => (
						<ComponentPropsTableGroup
							{...props}
							listLength={propsBySourceReversed().length}
							group={group}
							index={ix()}
						/>
					)}
				</For>
			</Flex>
		</Flex>
	);
};
