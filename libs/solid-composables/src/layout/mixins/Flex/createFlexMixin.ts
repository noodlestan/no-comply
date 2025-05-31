import { type PickRequired, computedProps, createClassList } from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

import styles from './FlexMixin.module.scss';
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
    const direction = () => props.direction ?? _defaults.direction;
    const align = () => props.align ?? _defaults.align;
    const justify = () => props.justify ?? _defaults.justify;
    const classList = createClassList(styles, () => ({
        Flex: true,
        ...responsiveClassMap(breakpoints, 'gap', props.gap),
        [`direction-${direction()}`]: true,
        [`align-${align()}`]: true,
        [`justify-${justify()}`]: true,
        [`shrink`]: props.shrink === true,
        [`no-shrink`]: props.shrink === false,
        [`wrap`]: Boolean(props.wrap),
        [`flex`]: props.flex !== undefined,
        [`inline`]: Boolean(props.inline),
    }));
    const style = () => ({
        '--__flex-flex': props.flex,
    });
    const $root = computedProps({
        classList,
        style,
    });

    return {
        $root,
    };
}
