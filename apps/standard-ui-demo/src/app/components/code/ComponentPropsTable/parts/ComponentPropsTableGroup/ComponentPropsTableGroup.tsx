import { type ComponentEntityData, type NoComplyEntityData } from '@no-comply/meta';
import { VisuallyHidden } from '@no-comply/solid-composables';
import { Display, Divider, Flex, Link } from '@no-comply/standard-ui';
import { type Component, For, type JSX, type Resource, Show } from 'solid-js';

import { routeFor } from '../../../../../navigation';
import type { ComponentProp, ComponentPropsGroup } from '../../types';
import { ComponentPropsTableRow } from '../ComponentPropsTableRow';

type Props = {
	component: ComponentEntityData;
	id?: string;
	group: ComponentPropsGroup;
	index: number;
	listLength: number;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	propControls?: (prop: ComponentProp) => JSX.Element;
};

type ItemsProps = Props & {
	group: ComponentPropsGroup;
};

const Items: Component<ItemsProps> = props => {
	return (
		<For each={props.group.props}>
			{(prop, ix) => {
				const id = `prop-${prop.name}`;
				return (
					<Flex tag="li" direction="column" gap="m" aria-labelledby={id}>
						<ComponentPropsTableRow {...props} prop={prop} id={id} />
						<Show when={ix() < props.group.props.length - 1}>
							<Divider variant="muted" />
						</Show>
					</Flex>
				);
			}}
		</For>
	);
};

export const ComponentPropsTableGroup: Component<Props> = props => {
	const sourceHref = (ref: string, entity?: NoComplyEntityData) =>
		entity ? `${routeFor.entity(entity)}#${ref}` : ref;

	const id = () => `prop-group-${props.group.ref || 'global'}`;

	return (
		<>
			<Show when={props.showGroups}>
				<Flex tag="li" gap="m" direction="column" aria-labelledby={id()}>
					<Flex direction="column" gap="l">
						<Display level={5} id={id()}>
							<VisuallyHidden>
								{props.group.ref ? 'Props inherited from' : 'Local props'}
							</VisuallyHidden>
							<Show when={props.group.ref}>
								<Link href={sourceHref(props.group.ref, props.group.entity)}>
									{props.group.ref}
								</Link>
							</Show>
						</Display>
						<Flex tag="ul" direction="column" gap="m">
							<Items {...props} />
						</Flex>
					</Flex>
					<Show when={props.index < props.listLength - 1}>
						<Divider variant={props.showGroups ? 'base' : 'muted'} />
					</Show>
				</Flex>
			</Show>
			<Show when={!props.showGroups}>
				<Items {...props} />
			</Show>
		</>
	);
};
