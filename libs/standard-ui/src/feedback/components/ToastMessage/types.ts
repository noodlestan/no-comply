import type { ContentMessageAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor, JSX } from 'solid-js';

import type { CloseButtonProps } from '../../../action';
import type { FlexGap, LayoutPaddingShorthand } from '../../../layout';
import type { ContentSize } from '../../../size';

export type ToastMessageVariant = 'passive' | 'info' | 'warning' | 'danger';
export type ToastMessageSize = 'small' | 'normal' | 'medium';
export type ToastMessageLength = 'compact' | 'full';

export type ToastMessageProps = {
	title: JSX.Element;
	summary: JSX.Element;
	variant?: ToastMessageVariant;
	onClose?: () => void;
	size?: ToastMessageSize;
	length?: ToastMessageLength;
};

export type ToastMessageAPI = {
	$root: ContentMessageAPI['$root'] & {
		classList: ClassList;
	};
	_displayTitle: ContentMessageAPI['$label'] & {
		size?: ContentSize;
		alignFirstLine: 'target';
		classList: ClassList;
	};
	_textBody: ContentMessageAPI['$description'] & {
		size?: ContentSize;
	};
	_textDescription: ContentMessageAPI['$description'] & {
		size?: ContentSize;
	};
	_icon: ContentMessageAPI['_icon'] & {
		size: ContentSize;
		alignFirstLine: 'measure';
		classList: ClassList;
	};
	hasIcon: ContentMessageAPI['hasIcon'];
	padding: Accessor<LayoutPaddingShorthand>;
	gap: Accessor<FlexGap>;
	hasCloseButton: Accessor<boolean>;
	closeButtonSize: Accessor<CloseButtonProps['size']>;
};
