import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

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

    const direction = () => locals.direction ?? _defaults.direction;
    const align = () => locals.align ?? _defaults.align;
    const justify = () => locals.justify ?? _defaults.justify;
    const classList = createClassList(styles, () => ({
        Flex: true,
        ...responsiveClassMap(breakpoints, 'gap', locals.gap),
        [`direction-${direction()}`]: true,
        [`align-${align()}`]: true,
        [`justify-${justify()}`]: true,
        [`shrink`]: locals.shrink === true,
        [`no-shrink`]: locals.shrink === false,
        [`wrap`]: Boolean(locals.wrap),
        [`flex`]: locals.flex !== undefined,
        [`inline`]: Boolean(locals.inline),
    }));
    const style = () => ({
        '--__flex-flex': props.flex,
    });

    const $root = computedProps({
        classList,
        style,
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
}
