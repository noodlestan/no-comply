import type { DividerMixinAPI, DividerMixinProps } from '../../mixins';

export type DividerProps = DividerMixinProps;

export type DividerAPI = {
	$root: DividerMixinAPI['$root'] & {
		'data-component': 'divider';
	};
};
