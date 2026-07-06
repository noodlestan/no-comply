import { createAriaFeedback } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { $FEEDBACK_MESSAGE, FEEDBACK_MESSAGE_ARIA_PROPS } from './constants';
import type { FeedbackMessageAPI, FeedbackMessageProps } from './types';

export const createFeedbackMessage = (props: FeedbackMessageProps): FeedbackMessageAPI => {
	const [locals, expose] = createExposable($FEEDBACK_MESSAGE, props);

	const feedbackOwnProps = splitProps(locals, FEEDBACK_MESSAGE_ARIA_PROPS);
	const feedbackVariant = computedProps({
		state: () => (props.pending ? undefined : props.variantStateMap[props.variant]),
	});
	const feedbackProps = combineProps(feedbackOwnProps, feedbackVariant);
	const {
		$root: $regionRoot,
		$label: $regionLabel,
		$description: $regionDescription,
	} = createAriaFeedback(feedbackProps);

	const $root = computedProps({
		'data-message-variant': () => locals.variant,
	});

	const icon = () => locals.icon ?? locals.iconMap?.[locals.variant];

	const _icon = computedProps({ icon });

	const hasIcon = () => Boolean(_icon.icon);

	return exposeAPI(expose, '$root', {
		$root: combineProps($regionRoot, $root),
		$label: $regionLabel,
		$description: $regionDescription,
		_icon,
		hasIcon,
	});
};
