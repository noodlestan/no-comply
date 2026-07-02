import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';

import { createMonoMixin } from '../../mixins';

import { $MONO } from './constants';
import type { MonoAPI, MonoProps } from './types';

const defaultProps: PickRequired<MonoProps, 'tag'> = {
	tag: 'div' as const,
};

export const createMono = (props: MonoProps): MonoAPI => {
	const [locals, expose, compose] = createExposable($MONO, props);

	const tag = () => locals.tag || defaultProps.tag;

	const { $root: $monoMixinRoot } = compose(createMonoMixin(locals));

	const $root = computedProps({
		component: tag,
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($monoMixinRoot, $root),
	});
};
