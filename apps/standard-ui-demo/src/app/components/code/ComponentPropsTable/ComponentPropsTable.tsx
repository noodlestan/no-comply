import type { ComponentEntityData } from '@no-comply/meta-entities';
import { Display, Flex, Link } from '@no-comply/standard-ui';
import type { EntityDataBase } from '@purrception/primitives';
import { type Component, For } from 'solid-js';

import { routeFor } from '../../../navigation';
import { ComponentPropsRow } from '../ComponentPropsRow';

interface ComponentPropsTableProps {
	component: ComponentEntityData;
	props: ComponentProp[];
}

type RefProps = { entity?: EntityDataBase; props: ComponentProp[] };

export const ComponentPropsTable: Component<ComponentPropsTableProps> = props => {
	const propsBySource = () => {
		return props.props.reduce(
			(acc, item) => {
				const _source = item.node.type._source;
				const key = _source?.ref || '';
				acc[key] = acc[key] || { entity: _source?.entity, props: [] };
				acc[key].props.push(item);
				return acc;
			},
			{} as Record<string, RefProps>,
		);
	};

	const useHref = (ref: string, item: RefProps) =>
		item.entity ? `${routeFor.entity(item.entity)}#${ref}` : ref;

	return (
		<Flex gap="l" direction="column">
			<For each={Object.entries(propsBySource())}>
				{([ref, item]) => (
					<>
						<Display level={4}>
							from <Link href={useHref(ref, item)}>{ref}</Link>
						</Display>
						<Flex gap="l" direction="column">
							<For each={item.props}>
								{prop => <ComponentPropsRow component={props.component} prop={prop} />}
							</For>
						</Flex>
					</>
				)}
			</For>
		</Flex>
	);
};
