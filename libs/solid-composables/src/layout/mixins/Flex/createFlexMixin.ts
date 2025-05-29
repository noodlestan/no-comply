import {
    type PickProps,
    type PickRequired,
    createClassList,
    createComputedProps,
} from '@no-comply/solid-primitives';

import { responsiveClassMap } from '../../../responsive';

import styles from './FlexMixin.module.scss';
import type { FlexMixinAPI, FlexMixinProps } from './types';

type Defaults = Partial<PickProps<FlexMixinProps, 'gap' | 'direction' | 'align' | 'justify'>>;

const _defaults: PickRequired<FlexMixinProps, 'direction' | 'align' | 'justify'> = {
    direction: 'column',
    align: 'stretch',
    justify: 'start',
};

export function createFlexMixin(
    props: FlexMixinProps,
    defaults: Defaults = {},
    breakpoints: readonly string[] = [],
): FlexMixinAPI {
    const direction = () => props.direction ?? defaults.direction ?? _defaults.direction;
    const align = () => props.align ?? defaults.align ?? _defaults.align;
    const justify = () => props.justify ?? defaults.justify ?? _defaults.justify;
    const classList = createClassList(styles, () => ({
        Flex: true,
        ...responsiveClassMap(breakpoints, 'gap', props.gap, defaults.gap),
        [`direction-${direction()}`]: true,
        [`align-${align()}`]: true,
        [`justify-${justify()}`]: true,
        [`shrink`]: props.shrink === true,
        [`no-shrink`]: props.shrink === false,
        [`wrap`]: Boolean(props.wrap),
        [`inline`]: Boolean(props.inline),
        [`flex`]: props.flex !== undefined,
    }));
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
}
