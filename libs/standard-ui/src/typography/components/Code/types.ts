import type { CodeTagName } from '@no-comply/solid-accessibility';

import type { CodeMixinAPI, CodeMixinProps } from '../../mixins';

export type CodeProps = CodeMixinProps & {
	tag?: CodeTagName;
};

export type CodeAPI = {
	$root: CodeMixinAPI['$root'] & {
		component: CodeTagName;
	};
};
