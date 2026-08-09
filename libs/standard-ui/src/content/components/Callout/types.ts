import type { ContentMessageAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor, JSX } from 'solid-js';

import type { CloseButtonProps } from '../../../action';
import type { FlexGap, LayoutPaddingShorthand } from '../../../layout';
import type { ContentSize } from '../../../size';

export type CalloutVariant = 'passive' | 'info' | 'warning' | 'danger';
export type CalloutSize = 'small' | 'normal' | 'medium';
export type CalloutLength = 'compact' | 'full';

export type CalloutProps = {
	title: JSX.Element;
	summary: JSX.Element;
	variant?: CalloutVariant;
	onClose?: () => void;
	size?: CalloutSize;
	length?: CalloutLength;
};

export type CalloutAPI = {
	$root: ContentMessageAPI['$root'] & {
		classList: ClassList;
	};
	_displayTitle: ContentMessageAPI['$label'] & {
		size: ContentSize;
		alignFirstLine: 'target';
		classList: ClassList;
	};
	_icon: ContentMessageAPI['_icon'] & {
		size: ContentSize;
		alignFirstLine: 'measure';
		classList: ClassList;
	};
	_textDescription: ContentMessageAPI['$description'] & {
		size: ContentSize;
	};
	_textBody: ContentMessageAPI['$description'] & {
		size: ContentSize;
	};
	hasIcon: ContentMessageAPI['hasIcon'];
	padding: Accessor<LayoutPaddingShorthand>;
	gap: Accessor<FlexGap>;
	hasCloseButton: Accessor<boolean>;
	closeButtonSize: Accessor<CloseButtonProps['size']>;
};
