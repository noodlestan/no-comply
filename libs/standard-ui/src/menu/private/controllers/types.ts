import type { IconProps } from '../../../icon';

export type BaseMenuItemAPI = {
	_label: {
		size: 'small';
		tag: 'span';
		alignFirstLine: 'target';
	};
	_textDescription: {
		size: 'small';
		tag: 'span';
	};
	_icon: {
		size: NonNullable<IconProps['size']>;
		alignFirstLine: 'measure';
	};
};
