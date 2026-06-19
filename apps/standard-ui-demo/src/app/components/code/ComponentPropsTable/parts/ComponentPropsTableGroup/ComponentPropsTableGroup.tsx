import { type ComponentEntityData, type NoComplyEntityData } from '@no-comply/meta';
import { Display, Divider, Flex, Link } from '@no-comply/standard-ui';
import { type Component, For, type JSX, type Resource, Show } from 'solid-js';

import { routeFor } from '../../../../../navigation';
import type { ComponentProp, ComponentPropsGroup } from '../../types';
import { ComponentPropsTableRow } from '../ComponentPropsTableRow';

type Props = {
	component: ComponentEntityData;
	group: ComponentPropsGroup;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	propControls?: (prop: ComponentProp) => JSX.Element;
};

export const ComponentPropsTableGroup: Component<Props> = props => {
	const sourceHref = (ref: string, entity?: NoComplyEntityData) =>
		entity ? `${routeFor.entity(entity)}#${ref}` : ref;

	return (
		<Flex direction="column" gap="l">
			<Show when={props.showGroups && props.group.ref}>
				<Display level={5}>
					<Link href={sourceHref(props.group.ref, props.group.entity)}>{props.group.ref}</Link>
				</Display>
			</Show>
			<Flex direction="column" gap="m">
				<For each={props.group.props}>
					{(prop, ix) => (
						<>
							<ComponentPropsTableRow {...props} prop={prop} />
							<Show when={ix() < props.group.props.length - 1}>
								<Divider variant="muted" />
							</Show>
						</>
					)}
				</For>
			</Flex>
		</Flex>
	);
};
