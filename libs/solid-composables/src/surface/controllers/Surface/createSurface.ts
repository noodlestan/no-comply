import { createAriaRegion } from '@no-comply/solid-accessibility';
import { createExposable, createSurfaceContext, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createDataAttributes } from '@no-comply/solid-primitives';

import { $SURFACE } from './constants';
import type { SurfaceAPI, SurfaceProps } from './types';

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
	const [locals, expose] = createExposable($SURFACE, props);

	const contextValue = createSurfaceContext(() => locals.variant);
	const [context] = contextValue;

	const { $root: $regionRoot, $label, $description } = createAriaRegion(locals);

	const style = () => context.contextVars();
	const component = () => locals.tag ?? 'div';

	const $root = computedProps({
		style,
		component,
	});

	const dataAttributes = createDataAttributes(context.contextData);

	return exposeAPI(expose, '$root', {
		$root: combineProps(dataAttributes, $regionRoot, $root),
		$description,
		$label,
		context,
		contextValue,
	});
};
