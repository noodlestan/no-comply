import { createClassList, createComputedProps } from '@noodlestan/context-ui-primitives';

import styles from './FocusRing.module.css';
import { type FocusRingAPI, type FocusRingProps } from './types';

export const createFocusRing = (props: FocusRingProps = {}): FocusRingAPI => {
    const classList = createClassList(styles, () => ({
        FocusRing: true,
        'FocusRing-inset': Boolean(props.inset),
    }));
    const $localRoot = createComputedProps({ classList });

    return {
        $root: $localRoot,
    };
};
