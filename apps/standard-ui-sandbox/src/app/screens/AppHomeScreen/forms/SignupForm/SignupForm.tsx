import { createComputedProps } from '@noodlestan/context-ui-types';
import { createForm } from '@noodlestan/headless-ui';
import { Button, Flex, Form, MessageBox } from '@noodlestan/standard-ui';
import { type Component, Show, createSignal } from 'solid-js';

import { ConfirmPasswordField, PasswordField, UsernameField } from '../../fields';

import type { SignupData, SignupFormProps } from './types';

const submit = async (data: SignupData) => {
    console.info('submitted', data);
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve();
            }
            reject(new Error(`Error submitting form`));
        }, 1000);
    });
};

export const SignupForm: Component<SignupFormProps> = props => {
    const [isSubmitting, setIsSubmitting] = createSignal(false);
    const [submitError, setSubmitError] = createSignal<Error>();
    const [signupData, setSignupData] = createSignal<Partial<SignupData>>({});
    const [confirmPassword, setConfirmPassword] = createSignal<string>();

    const formProps = createComputedProps({
        pending: isSubmitting,
    });
    const form = createForm(formProps);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await submit(signupData() as SignupData);
            props.onComplete();
        } catch (err) {
            setSubmitError(err as Error);
            setIsSubmitting(false);
        }
    };

    const handleUsernameChange = (value: string) =>
        setSignupData(prev => ({
            ...prev,
            username: value,
        }));

    const handlePasswordChange = (value: string) =>
        setSignupData(prev => ({
            ...prev,
            password: value,
        }));

    return (
        <Form form={form} onSubmit={handleSubmit} onCancel={props.onCancel}>
            <Flex direction="column" gap="l">
                <Flex direction="column" gap="m">
                    <UsernameField
                        value={signupData().email}
                        onChangeValue={handleUsernameChange}
                    />
                    <PasswordField
                        value={signupData().password}
                        onChangeValue={handlePasswordChange}
                    />
                    <ConfirmPasswordField
                        value={confirmPassword()}
                        onChangeValue={setConfirmPassword}
                    />
                </Flex>
                <Flex direction="column" gap="m">
                    <Button type="submit" {...form.submitButtonProps}>
                        Submit
                    </Button>
                    <Show when={submitError()}>
                        <MessageBox variant="error">{submitError()?.message}</MessageBox>
                    </Show>
                </Flex>
            </Flex>
        </Form>
    );
};
