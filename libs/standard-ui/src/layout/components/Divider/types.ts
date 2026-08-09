import type { DividerMixinAPI, DividerMixinProps } from '../../mixins';

export type DividerProps = Omit<DividerMixinProps, 'role'>;

export type DividerAPI = {
	$root: DividerMixinAPI['$root'] & {
		role: 'presentation';
	};
};
