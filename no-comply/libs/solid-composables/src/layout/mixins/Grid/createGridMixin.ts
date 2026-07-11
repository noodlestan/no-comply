import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList, splitAxisShorthand } from '@no-comply/solid-primitives';

import { responsiveVariantClassList } from '../../../responsive';
import { resolveGapProps } from '../../helpers';

import styles from './GridMixin.module.scss';
import { $GRID_MIXIN } from './constants';
import type { GridMixinAPI, GridMixinProps } from './types';

const gridAutomTemplate = (value: string | number) => {
	if (typeof value === 'number') {
		new Array(value).fill('1fr').join(' ');
	}
	return value;
};

export function createGridMixin(
	props: GridMixinProps,
	breakpoints: readonly string[] = [],
): GridMixinAPI {
	const [locals, expose] = createExposable($GRID_MIXIN, props);

	const [gap, rowGap, columnGap] = splitAxisShorthand(resolveGapProps(locals));

	const classList = createClassList(styles, () => ({
		Grid: true,
		...responsiveVariantClassList(breakpoints, 'gap', gap()),
		...responsiveVariantClassList(breakpoints, 'row-gap', rowGap()),
		...responsiveVariantClassList(breakpoints, 'column-gap', columnGap()),
		rows: true,
		columns: true,
		[`autoFlow-${locals.flow}`]: Boolean(locals.flow),
	}));

	const rowsStyle = () =>
		props.rows !== undefined
			? {
					'--__grid-rows': gridAutomTemplate(props.rows),
				}
			: {};
	const columnsStyle = () =>
		props.columns !== undefined
			? {
					'--__grid-columns': gridAutomTemplate(props.columns),
				}
			: {};

	const style = () => ({ ...rowsStyle(), ...columnsStyle() });

	const $root = computedProps({
		classList,
		style,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
}
