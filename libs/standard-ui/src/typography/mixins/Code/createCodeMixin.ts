import { createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	combineProps,
	computedProps,
	createClassList,
} from '@no-comply/solid-primitives';

import styles from './CodeMixin.module.scss';
import { $CODE_MIXIN } from './constants';
import type { CodeMixinAPI, CodeMixinProps } from './types';

const defaultProps: PickRequired<CodeMixinProps, 'variant'> = {
	variant: 'normal',
};

export const createCodeMixin = (props: CodeMixinProps): CodeMixinAPI => {
	const [locals, expose, compose] = createExposable($CODE_MIXIN, props);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const variant = () => locals.variant ?? defaultProps.variant;
	const classList = createClassList(styles, () => ['Code', `variant-${variant()}`]);
	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $root),
	});
};
