import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './InputStateMixin.module.scss';
import { $INPUT_STATE_MIXIN } from './constants';
import type { InputStateMixinAPI, InputStateMixinProps } from './types';

export const createInputStateMixin = (props: InputStateMixinProps): InputStateMixinAPI => {
	const [, expose] = createExposable($INPUT_STATE_MIXIN, props);

	const classList = createClassList(styles, () => ({
		InputState: true,
		'is-invalid': Boolean(props.invalid),
		'is-modified': Boolean(props.modified),
		'is-positive': Boolean(props.positive),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
