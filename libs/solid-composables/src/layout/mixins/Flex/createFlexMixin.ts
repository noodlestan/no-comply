import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
	type PickRequired,
	computedProps,
	createClassList,
	splitAxisShorthand,
} from '@no-comply/solid-primitives';

import { responsiveBooleanClassList, responsiveVariantClassList } from '../../../responsive';
import { resolveGapProps } from '../../helpers';

import styles from './FlexMixin.module.scss';
import { $FLEX_MIXIN } from './constants';
import type { FlexMixinAPI, FlexMixinProps } from './types';

const _defaults: PickRequired<FlexMixinProps, 'direction' | 'align' | 'justify'> = {
	direction: 'column',
	align: 'stretch',
	justify: 'start',
};

export function createFlexMixin(
	props: FlexMixinProps,
	breakpoints: readonly string[] = [],
): FlexMixinAPI {
	const [locals, expose] = createExposable($FLEX_MIXIN, props);

	const [gap, rowGap, columnGap] = splitAxisShorthand(resolveGapProps(locals));

	const direction = () => locals.direction ?? _defaults.direction;
	const align = () => locals.align ?? _defaults.align;
	const justify = () => locals.justify ?? _defaults.justify;
	const classList = createClassList(styles, () => ({
		Flex: true,
		...responsiveVariantClassList(breakpoints, 'gap', gap()),
		...responsiveVariantClassList(breakpoints, 'row-gap', rowGap()),
		...responsiveVariantClassList(breakpoints, 'column-gap', columnGap()),
		...responsiveVariantClassList(breakpoints, 'direction', direction()),
		...responsiveVariantClassList(breakpoints, 'align', align()),
		...responsiveVariantClassList(breakpoints, 'justify', justify()),
		...responsiveBooleanClassList(breakpoints, 'shrink', 'no-shrink', locals.shrink),
		...responsiveBooleanClassList(breakpoints, 'wrap', 'no-wrap', locals.wrap),
		...responsiveBooleanClassList(breakpoints, 'inline', 'not-inline', locals.inline),

		[`flex`]: locals.flex !== undefined,
	}));

	const style = () => ({
		'--__flex-flex': Number(props.flex),
	});

	const $root = computedProps({
		classList,
		style,
	});

	return exposeAPI(expose, '$root', {
		$root,
	});
}
