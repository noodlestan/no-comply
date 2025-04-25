import type { HeadingTagName } from '@noodlestan/context-ui-aria';
import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { splitProps } from 'solid-js';

import styles from './Display.module.css';
import type { DisplayAPI, DisplayLevel, DisplayProps } from './types';

const MAP_LEVEL_TO_TAG: Record<DisplayLevel, HeadingTagName> = {
    1: 'h1',
    2: 'h2',
    3: 'h3',
    4: 'h4',
    5: 'h5',
    6: 'h6',
};

export const createDisplay = (props: DisplayProps): DisplayAPI => {
    const [locals, others] = splitProps(props, ['level']);

    const component = () => MAP_LEVEL_TO_TAG[locals.level];

    const classList = createClassList(styles, () => [`Display`, `Display-levl-${locals.level}`]);

    const displayProps = createComputedProps({ classList, component });

    return {
        elProps: mergeProps(others, displayProps),
    };
};
