import type { BaseMenuItemAPI } from './types';

export const createBaseMenuItem = (): BaseMenuItemAPI => {
	const _label = {
		size: 'small',
		tag: 'span',
		alignFirstLine: 'target',
	} as const;

	const _textDescription = {
		size: 'small',
		tag: 'span',
	} as const;

	const _icon = {
		size: 'small',
		alignFirstLine: 'measure',
	} as const;

	return {
		_label,
		_textDescription,
		_icon,
	};
};
