import type { ContentMessageAPI } from '@no-comply/solid-composables';
import type { ClassList } from '@no-comply/solid-primitives';
import type { Accessor, JSX } from 'solid-js';

import type { CloseButtonProps } from '../../../action';
import type { FlexGap, LayoutPaddingShorthand } from '../../../layout';
import type { ContentSize, SizeScale } from '../../../size';
import type { DisplayVariant, TextVariant } from '../../../typography';

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
	$title: ContentMessageAPI['$label'] & {
		classList: ClassList;
		variant: DisplayVariant;
	};
	$body: ContentMessageAPI['$description'] & {
		variant: TextVariant;
	};
	$description: ContentMessageAPI['$description'] & {
		variant: TextVariant;
	};
	_icon: ContentMessageAPI['_icon'] & {
		size: ContentSize;
		classList: ClassList;
	};
	hasIcon: ContentMessageAPI['hasIcon'];
	alignmentHeight: Accessor<SizeScale>;
	padding: Accessor<LayoutPaddingShorthand>;
	gap: Accessor<FlexGap>;
	titleVariant: Accessor<DisplayVariant>;
	hasCloseButton: Accessor<boolean>;
	closeButtonSize: Accessor<CloseButtonProps['size']>;
};
