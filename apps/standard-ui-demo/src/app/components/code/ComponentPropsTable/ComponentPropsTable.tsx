import {
	type ComponentEntityData,
	resolveComponentProps,
	resolveComponentPropsJsDocData,
} from '@no-comply/meta';
import { Display, Flex, Link } from '@no-comply/standard-ui';
import {
	type JsDocData,
	type ObjectLiteralTypeNode,
	createResolveTypeContext,
	resolveExpression,
} from '@purrception/lang-ts';
import type { EntityDataBase } from '@purrception/primitives';
import { type Component, For, Show } from 'solid-js';

import { getSymbolEntityMaybe } from '../../../../providers';
import { routeFor } from '../../../navigation';
import { CodeDocDescription } from '../CodeDocDescription';
import { ComponentPropsRow } from '../ComponentPropsRow';
import type { ComponentProp } from '../types';

type Props = {
	component: ComponentEntityData;
	showDocs: boolean;
	showGroups: boolean;
};

type RefProps = { entity?: EntityDataBase; props: ComponentProp[] };

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
				const key = _source?.ref || '';
				acc[key] = acc[key] || { entity: _source?.entity, props: [] };
				acc[key].props.push(prop);
				return acc;
			},
			{} as Record<string, RefProps>,
		);
	};

	const sourceHref = (ref: string, entity?: EntityDataBase) =>
		entity ? `${routeFor.entity(entity)}#${ref}` : ref;

	return (
		<Flex gap="l" direction="column">
			<Show when={props.showDocs && resolveComponentPropsJsDocData(props.component)}>
				<CodeDocDescription node={resolveComponentPropsJsDocData(props.component) as JsDocData} />
			</Show>
			<For each={Object.entries(propsBySource()).reverse()}>
				{([ref, source]) => (
					<Flex gap="l" direction="column">
						<Show when={props.showGroups}>
							<Display level={4}>
								<Link href={sourceHref(ref, source.entity)}>{ref}</Link>
							</Display>
						</Show>
						<Flex gap="l" direction="column">
							<For each={source.props}>
								{prop => (
									<ComponentPropsRow
										component={props.component}
										entity={source.entity}
										prop={prop}
										showDocs={props.showDocs}
										showGroups={props.showGroups}
									/>
								)}
							</For>
						</Flex>
					</Flex>
				)}
			</For>
		</Flex>
	);
};
