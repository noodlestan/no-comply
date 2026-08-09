import { createContentMessage } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
	staticClassList,
} from '@no-comply/solid-primitives';

import styles from './ToastMessage.module.scss';
import { $TOASTMESSAGE } from './constants';
import { SIZE_MAP } from './private';
import type { ToastMessageAPI, ToastMessageProps } from './types';

const defaultProps: PickRequired<ToastMessageProps, 'size' | 'length'> = {
	size: 'normal',
	length: 'full',
};

export const createToastMessage = (props: ToastMessageProps): ToastMessageAPI => {
	const [locals, expose, compose] = createExposable($TOASTMESSAGE, props);

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

	const classList = createClassList(styles, () => ['ToastMessage', `length-${length()}`]);
	const $toastMessageRoot = computedProps({
		classList,
	});

	const displayStatic = {
		alignFirstLine: 'target',
		classList: staticClassList(styles, '-Title'),
	} as const;
	const _displayTitle = computedProps(displayStatic, { size: titleSize });

	const _iconSstatic = {
		alignFirstLine: 'measure',
		classList: staticClassList(styles, '-Icon'),
	} as const;
	const _icon = computedProps(_iconSstatic, { size });

	const _textDescription = computedProps({ size: textSize });

	const _textBody = computedProps({ size: textSize });

	const hasCloseButton = () => Boolean(locals.onClose);

	return exposeAPI(expose, '$root', {
		$root: combineProps($messageRoot, $toastMessageRoot),
		_displayTitle: combineProps($messageLabel, _displayTitle),
		_textDescription: combineProps($messageDescription, _textDescription),
		_textBody,
		_icon: combineProps(_messageIcon, _icon),
		hasIcon,
		padding,
		gap,
		hasCloseButton,
		closeButtonSize: size,
	});
};
