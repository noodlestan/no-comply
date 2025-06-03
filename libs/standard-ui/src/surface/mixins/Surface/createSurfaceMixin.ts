import { createSurfaceMixin as createHeadlessSurfaceMixin } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, staticClassList } from '@no-comply/solid-primitives';

import { createLayoutMixin } from '../../../layout';

import styles from './SurfaceMixin.module.scss';
import { $SURFACE_MIXIN } from './constants';
import type { SurfaceMixinAPI, SurfaceMixinProps } from './types';

export const createSurfaceMixin = (props: SurfaceMixinProps): SurfaceMixinAPI => {
    const [locals, expose, compose] = createExposable($SURFACE_MIXIN, props);

    const { $root: $surfaceMixinRoot } = compose(createHeadlessSurfaceMixin());
    const { $root: $layoutMixinRoot } = compose(createLayoutMixin(locals));

    const $root = {
        classList: staticClassList(styles, 'Surface'),
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($surfaceMixinRoot, $layoutMixinRoot, $root),
    });
};
