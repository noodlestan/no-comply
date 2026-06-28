import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './InputBoxMixin.module.scss';
import { $INPUT_BOX_MIXIN } from './constants';
import type { InputBoxMixinAPI, InputBoxMixinProps } from './types';

export const createInputBoxMixin = (props: InputBoxMixinProps): InputBoxMixinAPI => {
	const [, expose] = createExposable($INPUT_BOX_MIXIN, props);

	const classList = createClassList(styles, () => ({
		InputBox: true,
		'is-disabled': Boolean(props.disabled),
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-touched': Boolean(props.touched),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
