import { Button, Flex, Form, MessageBox } from '@noodlestan/standard-ui';
import { type Component, Show, createSignal } from 'solid-js';

import { ConfirmPasswordField, PasswordField, UsernameField } from '../../fields';

import { mockSubmit } from './private';
import type { SignupData, SignupFormProps } from './types';

export const SignupForm: Component<SignupFormProps> = props => {
    const [isSubmitting, setIsSubmitting] = createSignal(false);
    const [submitError, setSubmitError] = createSignal<Error>();
    const [signupData, setSignupData] = createSignal<Partial<SignupData>>({});
    const [confirmPassword, setConfirmPassword] = createSignal<string>();

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await mockSubmit(signupData() as SignupData);
            props.onComplete();
        } catch (err) {
            setSubmitError(err as Error);
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        props.onCancel();
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
        <Form pending={isSubmitting()} onSubmit={handleSubmit}>
            {form => (
                <Flex direction="column" gap="l">
                    <Button onPress={handleCancel}>close</Button>
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
            )}
        </Form>
    );
};
