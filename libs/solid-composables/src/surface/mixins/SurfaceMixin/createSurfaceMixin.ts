import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { staticClassList } from '@no-comply/solid-primitives';

import styles from './SurfaceMixin.module.scss';
import { $SURFACE_MIXIN } from './constants';
import type { SurfaceMixinAPI } from './types';

export const createSurfaceMixin = (): SurfaceMixinAPI => {
    const [, expose] = createExposable($SURFACE_MIXIN);

    const $root = {
        classList: staticClassList(styles, 'Surface'),
    };

    return exposeAPI(expose, '$root', {
        $root,
    });
};
