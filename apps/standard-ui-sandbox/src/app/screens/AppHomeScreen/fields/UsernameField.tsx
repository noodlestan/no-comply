/* eslint-disable jsx-a11y/label-has-associated-control */
import { type InputControllerProps, TextInput } from '@noodlestan/context-ui';
import { Field } from '@noodlestan/standard-ui';
import { type Component, Show } from 'solid-js';

type UsernameFieldProps = InputControllerProps<string>;

export const UsernameField: Component<UsernameFieldProps> = props => {
    return (
        <Field size="medium" label="Username" required>
            {field => (
                <>
                    <div {...field.hintProps}>Will be visible by other users.</div>
                    <Show when={field.hasFeedback()}>
                        <div {...field.feedbackProps}>error message</div>
                    </Show>
                    <TextInput size="m" value={props.value} onChangeValue={props.onChangeValue} />
                </>
            )}
        </Field>
    );
};
