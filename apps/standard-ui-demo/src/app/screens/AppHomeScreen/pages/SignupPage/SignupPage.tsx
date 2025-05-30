import { type Component } from 'solid-js';

import { BasePage } from '../../../../templates';
import { SignupForm } from '../../forms';

export const SignupPage: Component = () => {
    const handleFormCancel = () => {
        console.info('cancel');
    };
    const handleFormComplete = () => {
        console.info('complete');
    };
    return (
        <BasePage title="Signup">
            <SignupForm onCancel={handleFormCancel} onComplete={handleFormComplete} />
        </BasePage>
    );
};
