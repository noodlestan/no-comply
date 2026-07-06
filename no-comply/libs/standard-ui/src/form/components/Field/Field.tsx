import { FieldContextProvider } from '@no-comply/solid-contexts';
import { type ClosedTagProps, type RenderProp, combineProps } from '@no-comply/solid-primitives';
import { type Component, type JSX, splitProps } from 'solid-js';

import { Flex } from '../../../layout';
import { FieldLabel } from '../FieldLabel';

import { FIELD_PROPS } from './constants';
import { createField } from './createField';
import type { FieldAPI, FieldProps } from './types';

type ChildrenProps = { field: FieldAPI };

type Props = ClosedTagProps &
	FieldProps & {
		label: JSX.Element;
		children: RenderProp<ChildrenProps>;
	};

export const Field: Component<Props> = props => {
	const [locals, $others] = splitProps(props, [...FIELD_PROPS, 'label', 'children']);
	const field = createField(locals);
	const { $root, _fieldLabel, contextValue } = field;

	const $ = combineProps($others, $root);

	return (
		<FieldContextProvider context={contextValue}>
			<Flex direction="column" gap="s" {...$}>
				<FieldLabel {..._fieldLabel}>{locals.label}</FieldLabel>
				{locals.children({ field })}
			</Flex>
		</FieldContextProvider>
	);
};
