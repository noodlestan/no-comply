import type { CodeTagName } from '@no-comply/solid-accessibility';

import type { MonoMixinAPI, MonoMixinProps } from '../../mixins';

export type MonoProps = MonoMixinProps & {
	tag?: CodeTagName;
};

export type MonoAPI = {
	$root: MonoMixinAPI['$root'] & {
		component: CodeTagName;
	};
};
