import { TextInput } from '@noodlestan/context-ui';
import { FormFieldBase, createFormField } from '@noodlestan/headless-ui';
import { type Component } from 'solid-js';

type PasswordFieldProps = {
    value: string | undefined;
    onChangeValue: (value: string) => void;
};

export const PasswordField: Component<PasswordFieldProps> = props => {
    const fieldProps = {
        required: true,
    };
    const field = createFormField(fieldProps);

    return (
        <FormFieldBase field={field}>
            <TextInput value={props.value} onChangeValue={props.onChangeValue} />
        </FormFieldBase>
    );
};
