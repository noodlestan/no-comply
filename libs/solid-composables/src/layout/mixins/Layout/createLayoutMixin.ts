import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps, createClassList, splitSideShorthand } from '@no-comply/solid-primitives';

import { responsiveBooleanClasses, responsiveVariantClasses } from '../../../responsive';
import { resolvePaddingProps } from '../../helpers';

import styles from './LayoutMixin.module.scss';
import { $LAYOUT_MIXIN } from './constants';
import type { LayoutMixinAPI, LayoutMixinProps } from './types';

export function createLayoutMixin(
    props: LayoutMixinProps,
    breakpoints: readonly string[] = [],
): LayoutMixinAPI {
    const [locals, expose] = createExposable($LAYOUT_MIXIN, props);

    const [
        padding,
        paddingBlock,
        paddingBlockStart,
        paddingBlockEnd,
        paddingInline,
        paddingInlineStart,
        paddingInlineEnd,
    ] = splitSideShorthand(resolvePaddingProps(locals));

    const classList = createClassList(styles, () => [
        'Layout',
        ...responsiveVariantClasses(breakpoints, 'padding', padding()),
        ...responsiveVariantClasses(breakpoints, 'padding-block', paddingBlock()),
        ...responsiveVariantClasses(breakpoints, 'padding-block-start', paddingBlockStart()),
        ...responsiveVariantClasses(breakpoints, 'padding-block-end', paddingBlockEnd()),
        ...responsiveVariantClasses(breakpoints, 'padding-inline', paddingInline()),
        ...responsiveVariantClasses(breakpoints, 'padding-inline-start', paddingInlineStart()),
        ...responsiveVariantClasses(breakpoints, 'padding-inline-end', paddingInlineEnd()),
        ...responsiveVariantClasses(breakpoints, 'stretch', locals.stretch),
        ...responsiveBooleanClasses(breakpoints, 'uncontained', 'contained', locals.uncontained),
        ...responsiveVariantClasses(breakpoints, 'overflow', locals.overflow),
    ]);

    const $root = computedProps({
        classList,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
}
