import { createSurface as createHeadlessSurface } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createSurfaceMixin } from '../../mixins';

import { $SURFACE } from './constants';
import type { SurfaceAPI, SurfaceProps } from './types';

const defaultProps: PickRequired<SurfaceProps, 'variant'> = {
	variant: 'stage',
};

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
	const [locals, expose, compose] = createExposable($SURFACE, props);

	const variant = () => locals.variant ?? defaultProps.variant;

	const [, others] = splitProps(locals, ['variant']);
	const computedSurfaceProps = computedProps({ variant });
	const variantProps = combineProps(others, computedSurfaceProps);
	const { $root: $surfaceRoot, ...rest } = compose(createHeadlessSurface(variantProps));
	const { $root: $surfaceMixinRoot } = compose(createSurfaceMixin(locals));

	return exposeAPI(expose, '$root', {
		...rest,
		$root: combineProps($surfaceRoot, $surfaceMixinRoot),
	});
};
