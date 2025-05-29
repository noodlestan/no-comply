import { type Component } from 'solid-js';

import { DemoPage } from '../../../../templates';
import { SignupForm } from '../../forms';

export const SignupPage: Component = () => {
    const handleFormCancel = () => {
        console.info('cancel');
    };
    const handleFormComplete = () => {
        console.info('complete');
    };
    return (
        <DemoPage title="Signup">
            <SignupForm onCancel={handleFormCancel} onComplete={handleFormComplete} />
        </DemoPage>
    );
};
