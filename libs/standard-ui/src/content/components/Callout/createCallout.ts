import { createContentMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
	staticClassList,
} from '@no-comply/solid-primitives';

import styles from './Callout.module.scss';
import { $CALLOUT } from './constants';
import { SIZE_MAP } from './private';
import type { CalloutAPI, CalloutProps } from './types';

const defaultProps: PickRequired<CalloutProps, 'size' | 'length'> = {
	size: 'normal',
	length: 'full',
};

export const createCallout = (props: CalloutProps): CalloutAPI => {
	const [locals, expose, compose] = createExposable($CALLOUT, props);

	const size = () => locals.size ?? defaultProps.size;
	const length = () => locals.length ?? defaultProps.length;

	const titleSize = () => SIZE_MAP[size()].titleSize;
	const textSize = () => SIZE_MAP[size()].textSize;
	const padding = () => SIZE_MAP[size()].padding;
	const gap = () => SIZE_MAP[size()].gap;

	const messageProps = computedProps({
		described: () => Boolean(props.summary),
		variant: () => props.variant || 'passive',
	});
	const {
		$root: $messageRoot,
		$label: $messageLabel,
		$description: $messageDescription,
		_icon: _messageIcon,
		hasIcon,
	} = compose(createContentMessage(messageProps));

	const classList = createClassList(styles, () => ['Callout', `length-${length()}`]);
	const $calloutRoot = computedProps({
		classList,
	});

	const displayStatic = {
		classList: staticClassList(styles, '-Title'),
		alignFirstLine: 'target',
	} as const;
	const _displayTitle = computedProps(displayStatic, { size: titleSize });

	const _iconSstatic = {
		classList: staticClassList(styles, '-Icon'),
		alignFirstLine: 'measure',
	} as const;
	const _icon = computedProps(_iconSstatic, { size });

	const _textDescription = computedProps({ size: textSize });
	const _textBody = computedProps({ size: textSize });

	const hasCloseButton = () => Boolean(locals.onClose);

	return exposeAPI(expose, '$root', {
		$root: combineProps($messageRoot, $calloutRoot),
		_displayTitle: combineProps($messageLabel, _displayTitle),
		_icon: combineProps(_messageIcon, _icon),
		_textDescription: combineProps($messageDescription, _textDescription),
		_textBody,
		hasIcon,
		padding,
		gap,
		hasCloseButton,
		closeButtonSize: size,
	});
};
