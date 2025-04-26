import { type InputControllerProps, TextInput } from '@noodlestan/context-ui';
import { Field } from '@noodlestan/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = InputControllerProps<string>;

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
                        size="m"
                        value={props.value}
                        onChangeValue={props.onChangeValue}
                        {...field.$input}
                    />
                </>
            )}
        </Field>
    );
};
