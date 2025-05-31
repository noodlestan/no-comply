import {
    type PickRequired,
    computedProps,
    mergeProps,
    staticClassList,
} from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createLayoutMixin } from '../../../layout';

import styles from './Surface.module.scss';
import type { SurfaceAPI, SurfaceProps } from './types';

const defaultProps: PickRequired<SurfaceProps, 'variant'> = {
    variant: 'stage',
};

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const [locals, others] = splitProps(props, ['variant']);

    const { $root: $layoutMixinRoot } = createLayoutMixin(props);

    const variant = () => locals.variant ?? defaultProps.variant;
    const staticProps = {
        classList: staticClassList(styles, 'Surface'),
    };
    const surfaceProps = computedProps(staticProps, { variant });

    return {
        surfaceProps: mergeProps(others, $layoutMixinRoot, surfaceProps),
    };
};
