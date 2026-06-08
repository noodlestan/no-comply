import type { ComponentEntityData } from '@no-comply/meta-entities';
import { Display, Flex, Link } from '@no-comply/standard-ui';
import type { EntityDataBase } from '@purrception/primitives';
import { type Component, For, Show } from 'solid-js';

import { routeFor } from '../../../navigation';
import { ComponentPropsRow } from '../ComponentPropsRow';
import type { ComponentProp } from '../types';

type Props = {
	component: ComponentEntityData;
	props: ComponentProp[];
	showDocs: boolean;
	showGroups: boolean;
};

type RefProps = { entity?: EntityDataBase; props: ComponentProp[] };

export const ComponentPropsTable: Component<Props> = props => {
	const propsBySource = () => {
		return props.props.reduce(
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
