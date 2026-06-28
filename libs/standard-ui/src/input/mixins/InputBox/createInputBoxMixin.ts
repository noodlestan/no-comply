import { createTypographyMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './InputBoxMixin.module.scss';
import { $INPUT_BOX_MIXIN } from './constants';
import type { InputBoxMixinAPI, InputBoxMixinProps } from './types';

export const createInputBoxMixin = (props: InputBoxMixinProps): InputBoxMixinAPI => {
	const [locals, expose, compose] = createExposable($INPUT_BOX_MIXIN, props);

	const { $root: $typographyMixinRoot } = compose(createTypographyMixin(locals));

	const classList = staticClassList(styles, `InputBox`);

	const $root = {
		classList,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($typographyMixinRoot, $root),
	});
};
