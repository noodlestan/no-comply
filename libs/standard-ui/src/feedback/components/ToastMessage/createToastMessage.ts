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
	const classList = createClassList(styles, () => ['ToastMessage', `length-${length()}`]);

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

	const $toastmessageRoot = computedProps({
		classList,
	});

	const titleVariant = () => SIZE_MAP[size()].titleVariant;
	const $toastmessageTitle = computedProps(
		{
			classList: staticClassList(styles, '-Title'),
		},
		{
			variant: titleVariant,
		},
	);

	const textVariant = () => SIZE_MAP[size()].textVariant;
	const $toastmessageDescription = computedProps({
		variant: textVariant,
	});

	const $body = computedProps({
		variant: textVariant,
	});

	const _iconSstatic = {
		classList: staticClassList(styles, '-Icon'),
	};
	const _toastmessageIcon = computedProps(_iconSstatic, {
		size,
	});

	const alignmentHeight = () => SIZE_MAP[size()].alignment;
	const padding = () => SIZE_MAP[size()].padding;
	const gap = () => SIZE_MAP[size()].gap;

	const hasCloseButton = () => Boolean(locals.onClose);

	return exposeAPI(expose, '$root', {
		$root: combineProps($messageRoot, $toastmessageRoot),
		$title: combineProps($messageLabel, $toastmessageTitle),
		$description: combineProps($messageDescription, $toastmessageDescription),
		$body,
		_icon: combineProps(_messageIcon, _toastmessageIcon),
		hasIcon,
		alignmentHeight,
		padding,
		gap,
		titleVariant,
		hasCloseButton,
		closeButtonSize: size,
	});
};
