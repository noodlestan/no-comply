/* eslint-disable dot-notation */
import type { ComponentEntityData, NoComplyEntityData } from '@no-comply/meta';
import { VisuallyHidden } from '@no-comply/solid-composables';
import { Flex, Label, Link, Text, TextInput } from '@no-comply/standard-ui';
import { CodeBlock } from '@purrtrait/solid-code';
import { type Component, type JSX, type Resource, Show } from 'solid-js';

import { routeFor } from '../../../../../navigation';
import { CodeDocDescription } from '../../../CodeDocDescription';
import type { ComponentProp, ComponentPropsGroup } from '../../types';

type Props = {
	component: ComponentEntityData;
	entity?: NoComplyEntityData;
	prop: ComponentProp;
	group: ComponentPropsGroup;
	showDocs: boolean;
	showGroups: boolean;
	propValues: Resource<Record<string, unknown>>;
	onChangeProp: (name: string, value: unknown) => void;
	propControls?: (prop: ComponentProp) => JSX.Element;
};

export const ComponentPropsTableRow: Component<Props> = props => {
	const id = () => `prop-value-${props.prop.name}`;
	const label = () => `Value for ${props.prop.name}`;

	const propValue = () => props.propValues()?.[props.prop.name];

	const typeRef = () => {
		const _source = props.prop.node.type._source;
		return _source?.ref || '';
	};

	const sourceHref = () => {
		const entity = props.entity;
		const ref = typeRef();
		return entity ? `${routeFor.entity(entity)}#${ref}` : ref;
	};

	const handleValueChange = (value: unknown) => props.onChangeProp?.(props.prop.name, value);

	const defaultValue = () => {
		const tag = props.prop.node.tags?.['default'];
		if (tag) {
			return typeof tag === 'string' ? tag : tag;
		}
	};

	return (
		<Flex direction="column" gap="m">
			<Flex direction="row" gap="s" align="baseline">
				<Flex direction="column" flex={1}>
					<Text variant="large">{props.prop.name}</Text>
				</Flex>
				<Flex direction="row" align="center" justify="between" gap="s">
					<Flex direction="row" align="center" gap="s">
						<VisuallyHidden>
							<Label for={id()}>{label()}</Label>
						</VisuallyHidden>
						<TextInput
							id={id()}
							value={String(propValue())}
							disabled={props.propValues.loading}
							onValueChange={handleValueChange}
						/>
					</Flex>
					{props.propControls?.(props.prop)}
				</Flex>
			</Flex>
			<Show when={props.showDocs}>
				<Flex direction="row" align="baseline" gap="s">
					<Text>type:</Text>
					<CodeBlock lang="ts" nodes={[props.prop.node.type as object]} context={props.component} />
				</Flex>
				<Flex direction="row" align="baseline" gap="s">
					<div>{props.prop.node.optional ? 'optional' : 'mandatory'}</div>
					<Show when={defaultValue()}>
						<Text variant="small">(default: {defaultValue()})</Text>
					</Show>
				</Flex>
			</Show>
			<Show when={props.showDocs && !props.showGroups && typeRef()}>
				<Text>
					Composed from <Link href={sourceHref()}>{typeRef()}</Link>
				</Text>
			</Show>
			<Show when={props.showDocs && props.prop.node.description}>
				<CodeDocDescription node={props.prop.node} />
			</Show>
		</Flex>
	);
};
