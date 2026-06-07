import { Button, Flex, Form, MessageBox } from '@no-comply/standard-ui';
import { type Component, Show, createSignal } from 'solid-js';

import { ConfirmPasswordField, CreatePasswordField, CreateUsernameField } from '../../fields';

import { mockSubmit } from './private';
import type { SignupData } from './types';

type Props = {
	onCancel: () => void;
	onComplete: () => void;
};

export const SignupForm: Component<Props> = props => {
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
			{({ form }) => (
				<Flex direction="column" gap="l">
					<Button onPress={handleCancel}>close</Button>
					<Flex direction="column" gap="m">
						<CreateUsernameField value={signupData().email} onValueChange={handleUsernameChange} />
						<CreatePasswordField
							value={signupData().password}
							onValueChange={handlePasswordChange}
						/>
						<ConfirmPasswordField value={confirmPassword()} onValueChange={setConfirmPassword} />
					</Flex>
					<Flex direction="column" gap="m">
						<Button {...form.$submitButton}>Submit</Button>
						<Show when={submitError()}>
							<MessageBox title={submitError()?.message as string} variant="error" />
						</Show>
					</Flex>
				</Flex>
			)}
		</Form>
	);
};
