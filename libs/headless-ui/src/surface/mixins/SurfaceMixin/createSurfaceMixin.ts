import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './SurfaceMixin.module.css';
import type { SurfaceMixinAPI } from './types';

export const createSurfaceMixin = (): SurfaceMixinAPI => {
    const $static = {
        classList: staticClassList(styles, 'Surface'),
    };
    const $localRoot = createComputedProps($static, {});

    return {
        $root: $localRoot,
    };
};
