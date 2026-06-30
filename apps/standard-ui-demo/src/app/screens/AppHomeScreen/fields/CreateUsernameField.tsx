import { Field, TextInput, type TextInputProps } from '@no-comply/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = Pick<TextInputProps, 'value' | 'onValueChange'>;

export const CreateUsernameField: Component<Props> = props => {
	return (
		<Field size="medium" label="Username" required>
			{({ field }) => (
				<>
					<div {...field.$description}>Will be visible by other users.</div>
					<Show when={field.hasFeedback()}>
						<div {...field.$feedback}>error message</div>
					</Show>
					<TextInput
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
