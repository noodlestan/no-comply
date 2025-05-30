import { Field, type InputControllerProps, TextInput } from '@no-comply/standard-ui';
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
