import {
    type AxisShorthandInput,
    type ResponsiveProp,
    createClassList,
    createComputedProps,
    resolveAxisShorthandProps,
} from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import { responsiveClassMap } from '../../../responsive';
import type { LayoutGapProps } from '../../types';

import styles from './GridMixin.module.scss';
import type { GridMixinAPI, GridMixinProps } from './types';

const createGapShorthandInput = (
    props: LayoutGapProps,
): Accessor<AxisShorthandInput<ResponsiveProp<string | undefined>>> => {
    return () => [props.gap, props.rowGap, props.columnGap];
};

export function createGridMixin(
    props: GridMixinProps,
    breakpoints: readonly string[] = [],
): GridMixinAPI {
    // const columns = () => props.columns ?? defaults.columns;
    // const rows = () => props.rows ?? defaults.rows;

    const [gap, rowGap, columnGap] = resolveAxisShorthandProps(createGapShorthandInput(props));

    const classList = createClassList(styles, () => ({
        Grid: true,
        ...responsiveClassMap(breakpoints, 'gap', gap()),
        ...responsiveClassMap(breakpoints, 'row-gap', rowGap()),
        ...responsiveClassMap(breakpoints, 'column-gap', columnGap()),
        // ...responsiveClassMap(breakpoints, 'columns', columns()),
        // ...responsiveClassMap(breakpoints, 'rows', rows()),
        [`autoFlow-${props.flow}`]: Boolean(props.flow),
    }));
    const $localRoot = createComputedProps({ classList });
    return {
        $root: $localRoot,
    };
}
