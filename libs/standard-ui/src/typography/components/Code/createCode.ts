import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createCodeMixin } from '../../mixins';

import { $CODE } from './constants';
import type { CodeAPI, CodeProps } from './types';

const defaultProps: PickRequired<CodeProps, 'tag'> = {
	tag: 'code' as const,
};

export const createCode = (props: CodeProps): CodeAPI => {
	const [locals, expose, compose] = createExposable($CODE, props);

	const tag = () => locals.tag || defaultProps.tag;

	const { $root: $codeMixinRoot } = compose(createCodeMixin(locals));

	const $root = computedProps({
		component: tag,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($codeMixinRoot, $root),
	});
};
