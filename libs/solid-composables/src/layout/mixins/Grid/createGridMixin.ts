import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList, splitAxisShorthand } from '@no-comply/solid-primitives';

import { responsiveVariantClassList } from '../../../responsive';
import { resolveGapProps } from '../../helpers';

import styles from './GridMixin.module.scss';
import { $GRID_MIXIN } from './constants';
import type { GridMixinAPI, GridMixinProps } from './types';

export function createGridMixin(
	props: GridMixinProps,
	breakpoints: readonly string[] = [],
): GridMixinAPI {
	const [locals, expose] = createExposable($GRID_MIXIN, props);

	// const columns = () => props.columns ?? defaults.columns;
	// const rows = () => props.rows ?? defaults.rows;

	const [gap, rowGap, columnGap] = splitAxisShorthand(resolveGapProps(locals));

	const classList = createClassList(styles, () => ({
		Grid: true,
		...responsiveVariantClassList(breakpoints, 'gap', gap()),
		...responsiveVariantClassList(breakpoints, 'row-gap', rowGap()),
		...responsiveVariantClassList(breakpoints, 'column-gap', columnGap()),
		// ...responsiveVariantClassList(breakpoints, 'columns', columns()),
		// ...responsiveVariantClassList(breakpoints, 'rows', rows()),
		[`autoFlow-${locals.flow}`]: Boolean(locals.flow),
	}));

	const $root = computedProps({
		classList,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
}
