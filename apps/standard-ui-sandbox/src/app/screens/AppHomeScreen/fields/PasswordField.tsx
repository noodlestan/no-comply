/* eslint-disable jsx-a11y/label-has-associated-control */
import { type InputControllerProps, TextInput, useForm } from '@noodlestan/context-ui';
import { createField } from '@noodlestan/headless-ui';
import { Field } from '@noodlestan/standard-ui';
import { type Component, Show } from 'solid-js';

type PasswordFieldProps = InputControllerProps<string>;

export const PasswordField: Component<PasswordFieldProps> = props => {
    const form = useForm();
    const fieldProps = {
        required: true,
    };
    const field = createField(fieldProps);
    const [context] = field.context;

    const showFeedback = () => form.isFeedbackEnabled() && context.isInvalid();

    return (
        <Field field={field} label="Password">
            <div {...field.hintProps}>Will be visible by other users.</div>
            <Show when={showFeedback()}>
                <div {...field.feedbackProps}>error message</div>
            </Show>
            <TextInput value={props.value} onChangeValue={props.onChangeValue} />
        </Field>
    );
};
