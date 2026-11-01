import type { BadgeMixinAPI, BadgeMixinProps } from '../../mixins';

export type BadgeProps = BadgeMixinProps;

export type BadgeAPI = {
	$root: BadgeMixinAPI['$root'];
};
