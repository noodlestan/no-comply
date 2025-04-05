/* eslint-disable jsx-a11y/label-has-associated-control */
import { TextInput } from '@noodlestan/context-ui';
import { FormFieldBase, createFormField } from '@noodlestan/headless-ui';
import { type Component, Show } from 'solid-js';

type UsernameFieldProps = {
    value: string | undefined;
    onChangeValue: (value: string) => void;
};

export const UsernameField: Component<UsernameFieldProps> = props => {
    const fieldProps = {
        required: true,
    };
    const field = createFormField(fieldProps);

    const showFeedback = () => form.isFeedbackEnabled && field.context.isInvalid();

    return (
        <FormField field={field}>
            <label {...field.labelProps}>Username</label>
            <div {...field.hintProps}>Will be visible by other users.</div>
            <Show when={showFeedback()}>
                <div {...field.feedbackProps}>error message</div>
            </Show>
            <TextInput value={props.value} onChangeValue={props.onChangeValue} />
        </FormField>
    );
};
