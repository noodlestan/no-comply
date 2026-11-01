import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import styles from './ComposeColorsMixin.module.scss';
import { $COMPOSE_COLORS_MIXIN } from './constants';
import type { ComposeColorsMixinAPI, ComposeColorsMixinProps } from './types';

const defaultProps: PickRequired<ComposeColorsMixinProps, 'fg' | 'bg' | 'border'> = {
	fg: false,
	bg: false,
	border: false,
};

export const createComposeColorsMixin = (props: ComposeColorsMixinProps): ComposeColorsMixinAPI => {
	const [locals, expose] = createExposable($COMPOSE_COLORS_MIXIN, props);

	const classList = createClassList(styles, () => [
		'ComposeColors',
		(locals.fg ?? defaultProps.fg) ? 'fg' : '',
		(locals.bg ?? defaultProps.bg) ? 'bg' : '',
		(locals.border ?? defaultProps.border) ? 'border' : '',
	]);

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
};
