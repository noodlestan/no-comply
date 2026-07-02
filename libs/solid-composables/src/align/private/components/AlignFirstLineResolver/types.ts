import type { AlignFirstLineResolverMixinAPI } from '../../mixins';

export type AlignFirstLineResolverProps = {
	tag?: 'div';
};

export type AlignFirstLineResolverAPI = {
	$root: AlignFirstLineResolverMixinAPI['$root'] & {
		component: 'div';
	};
};
