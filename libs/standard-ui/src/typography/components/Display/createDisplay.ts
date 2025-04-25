import type { HeadingTagName } from '@noodlestan/context-ui-aria';
import {
    type PickRequired,
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { createTextMixin } from '@noodlestan/headless-ui';
import { splitProps } from 'solid-js';

import styles from './Display.module.css';
import type { DisplayAPI, DisplayLevel, DisplayProps, DisplayVariant } from './types';

const MAP_LEVEL_TO_COMPONENT: Record<DisplayLevel, HeadingTagName> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
};

const MAP_LEVEL_TO_VARIANT: Record<DisplayLevel, DisplayVariant> = {
    1: 'xl',
    2: 'l',
    3: 'm',
    4: 's',
    5: 'xs',
};

const defaultProps: PickRequired<DisplayProps, 'level' | 'variant'> = {
    level: 3,
    variant: 'm',
};

export const createDisplay = (props: DisplayProps): DisplayAPI => {
    const [locals, others] = splitProps(props, ['level', 'variant', 'component']);

    const level = () => locals.level ?? defaultProps.level;
    const component = () => locals.component ?? MAP_LEVEL_TO_COMPONENT[level()];
    const variant = () => locals.variant ?? MAP_LEVEL_TO_VARIANT[level()];
    const classList = createClassList(styles, () => [`Display-variant-${variant()}`]);

    const DisplayProps = createComputedProps({ component, classList });

    const { elProps: textMixinElProps } = createTextMixin(others);
    return {
        elProps: mergeProps(textMixinElProps, DisplayProps),
    };
};
