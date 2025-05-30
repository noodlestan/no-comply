import { createComputedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './SurfaceMixin.module.scss';
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
