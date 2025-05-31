import { computedProps, staticClassList } from '@no-comply/solid-primitives';

import styles from './SurfaceMixin.module.scss';
import type { SurfaceMixinAPI } from './types';

export const createSurfaceMixin = (): SurfaceMixinAPI => {
    const $static = {
        classList: staticClassList(styles, 'Surface'),
    };
    const $root = computedProps($static, {});

    return {
        $root,
    };
};
