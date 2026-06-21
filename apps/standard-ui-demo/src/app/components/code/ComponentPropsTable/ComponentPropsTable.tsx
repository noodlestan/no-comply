import {
	type ComponentEntityData,
	type NoComplyEntityData,
	resolveComponentProps,
	resolveComponentPropsJsDocData,
} from '@no-comply/meta';
import { Divider, Flex } from '@no-comply/standard-ui';
import {
	type JsDocData,
	type ObjectLiteralTypeNode,
	createResolveTypeContext,
	resolveExpression,
} from '@purrception/lang-ts';
import { type Component, For, type JSX, type Resource, Show, createMemo } from 'solid-js';

import { getSymbolEntityMaybe } from '../../../../providers';
import { CodeDocDescription } from '../CodeDocDescription';

import { ComponentPropsTableGroup } from './parts';
import type { ComponentProp, ComponentPropsGroup } from './types';

type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	propControls?: (prop: ComponentProp) => JSX.Element;
};

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
		<Flex gap="m" direction="column">
			<Show when={props.showDocs && resolveComponentPropsJsDocData(props.component)}>
				<CodeDocDescription node={resolveComponentPropsJsDocData(props.component) as JsDocData} />
			</Show>
			<For each={propsBySourceReversed()}>
				{(group, ix) => (
					<>
						<ComponentPropsTableGroup {...props} group={group} />
						<Show when={ix() < propsBySourceReversed().length - 1}>
							<Divider variant={props.showGroups ? 'base' : 'muted'} />
						</Show>
					</>
				)}
			</For>
		</Flex>
	);
};
