import { TextInput } from '@noodlestan/context-ui';
import { FormFieldBase, createFormField } from '@noodlestan/headless-ui';
import { type Component } from 'solid-js';

type ConfirmPasswordFieldProps = {
    value: string | undefined;
    onChangeValue: (value: string) => void;
};

export const ConfirmPasswordField: Component<ConfirmPasswordFieldProps> = props => {
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
