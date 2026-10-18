import { TextInput, type TextInputProps } from '@no-comply/standard-ui';
import type { Component } from 'solid-js';

type Props = Pick<TextInputProps, 'id' | 'size' | 'value' | 'disabled' | 'onValueChange'> & {
	'aria-label'?: string;
};

export const ComponentPropInput: Component<Props> = props => {
	return (
		<TextInput
			id={props.id}
			size={props.size}
			value={props.value}
			disabled={props.disabled}
			onValueChange={props.onValueChange}
			aria-label={props['aria-label']}
		/>
	);
};
