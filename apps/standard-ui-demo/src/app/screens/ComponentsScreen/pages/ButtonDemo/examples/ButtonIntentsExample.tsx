import type { JSX } from 'solid-js';

import { ButtonVariantsExample } from './ButtonVariantsExample';

type Props = {
    intent: 'positive' | 'negative' | 'neutral';
};

export const ButtonIntentsExample = (props: Props): JSX.Element => (
    <>
        <ButtonVariantsExample variant="primary" intent={props.intent} />
        <ButtonVariantsExample variant="secondary" intent={props.intent} />
        <ButtonVariantsExample variant="plain" intent={props.intent} />
    </>
);
