import { Field, TextInput, type TextInputProps } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = Pick<TextInputProps, 'value' | 'onValueChange'>;

export const CreatePasswordField: Component<Props> = props => {
	return (
		<Field size="medium" label="Password" required>
			{({ field }) => (
				<>
					<div {...field.$description}>
						Must have a minimum of 8 characters and include at least a number and a symbol.
					</div>
					<Show when={field.hasFeedback()}>
						<div {...field.$feedback}>error message</div>
					</Show>
					<TextInput
						type="password"
						size="medium"
						value={props.value}
						onValueChange={props.onValueChange}
						{...field.$input}
					/>
				</>
			)}
		</Field>
	);
};
