import type { BaseInputProps } from '@no-comply/solid-composables';
import { Field, TextInput } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = BaseInputProps<string>;

export const ConfirmPasswordField: Component<Props> = props => {
	return (
		<Field size="medium" label="Password" required>
			{({ field }) => (
				<>
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
