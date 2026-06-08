import type { ActionIntent } from '@no-comply/standard-ui';
import type { JSX } from 'solid-js';

import { AllButtonVariantsAndIntents } from './AllButtonVariantsAndIntents';

type Props = {
	intent: ActionIntent;
};

export const AllButtonVariants = (props: Props): JSX.Element => (
	<>
		<AllButtonVariantsAndIntents variant="primary" intent={props.intent} />
		<AllButtonVariantsAndIntents variant="secondary" intent={props.intent} />
		<AllButtonVariantsAndIntents variant="plain" intent={props.intent} />
	</>
);
