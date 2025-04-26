import { type InputControllerProps, TextInput } from '@noodlestan/context-ui';
import { Field } from '@noodlestan/standard-ui';
import { type Component, Show } from 'solid-js';

type Props = InputControllerProps<string>;

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
