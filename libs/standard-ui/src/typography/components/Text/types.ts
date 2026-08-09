import type { TextTagName } from '@no-comply/solid-accessibility';

import type { TextMixinAPI, TextMixinProps } from '../../mixins';

export type TextProps = TextMixinProps & {
	tag?: TextTagName;
};

export type TextAPI = {
	$root: TextMixinAPI['$root'] & {
		component: TextTagName;
	};
};
