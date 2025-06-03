import type { JSX } from 'solid-js';

import { IconButtonVariantsExample } from './IconButtonVariantsExample';

type Props = {
    intent: 'positive' | 'negative' | 'neutral';
};
export const IconButtonIntentsExample = (props: Props): JSX.Element => (
    <>
        <IconButtonVariantsExample variant="primary" intent={props.intent} />
        <IconButtonVariantsExample variant="secondary" intent={props.intent} />
        <IconButtonVariantsExample variant="plain" intent={props.intent} />
    </>
);
