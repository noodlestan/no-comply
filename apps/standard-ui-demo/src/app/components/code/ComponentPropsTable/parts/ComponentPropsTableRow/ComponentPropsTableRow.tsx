/* eslint-disable dot-notation */
import type { ComponentEntityData, NoComplyEntityData } from '@no-comply/meta';
import { Display, Flex, Link, Text, TextInput } from '@no-comply/standard-ui';
import { PurrceptionLanguageId } from '@purrtrait/lang-ts';
import { type Component, type JSX, type Resource, Show } from 'solid-js';

import { routeFor } from '../../../../../navigation';
import { CodeDocDescription } from '../../../CodeDocDescription';
import { CodeInline } from '../../../CodeInline';
import type { ComponentProp, ComponentPropsGroup } from '../../types';

type Props = {
	id: string;
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
		<Flex tag="article" arial-label direction="column" gap="m">
			<Flex direction="row" gap="s" align="baseline" wrap>
				<Flex direction="column" flex={1}>
					<Display id={props.id} level={6}>
						{props.prop.name}
					</Display>
				</Flex>
				<Flex direction="row" align="center" justify="between" gap="s">
					<Flex direction="row" align="center" gap="s">
						<TextInput
							id={id()}
							size="small"
							value={String(propValue())}
							disabled={props.propValues.loading}
							onValueChange={handleValueChange}
							aria-label={label()}
						/>
					</Flex>
					{props.propControls?.(props.prop)}
				</Flex>
			</Flex>
			<Show when={props.showDocs}>
				<Flex direction="row" align="baseline" gap="s">
					<Text>type:</Text>
					<CodeInline
						lang={PurrceptionLanguageId}
						nodes={[props.prop.node.type as object]}
						context={props.component}
					/>
				</Flex>
				<Flex direction="row" align="baseline" gap="s">
					<div>{props.prop.node.optional ? 'optional' : 'mandatory'}</div>
					<Show when={defaultValue()}>
						<Text size="small">(default: {defaultValue()})</Text>
					</Show>
				</Flex>
			</Show>
			<Show when={props.showDocs && !props.showGroups && typeRef()}>
				<Text size="small">
					Composed from <Link href={sourceHref()}>{typeRef()}</Link>
				</Text>
			</Show>
			<Show when={props.showDocs && props.prop.node.description}>
				<CodeDocDescription size="small" node={props.prop.node} />
			</Show>
		</Flex>
	);
};
