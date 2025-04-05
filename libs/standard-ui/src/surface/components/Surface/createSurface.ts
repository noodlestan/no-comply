import {
    type PickRequired,
    createComputedProps,
    mergeProps,
    staticClassList,
} from '@noodlestan/context-ui-types';
import { splitProps } from 'solid-js';

import styles from './Surface.module.css';
import type { SurfaceAPI, SurfaceProps } from './types';

const defaultProps: PickRequired<SurfaceProps, 'variant'> = {
    variant: 'stage',
};

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const [locals, others] = splitProps(props, ['variant']);

    const variant = () => locals.variant ?? defaultProps.variant;

    const staticProps = {
        classList: staticClassList(styles, 'Surface'),
    };
    const surfaceProps = createComputedProps(staticProps, { variant });

    return {
        surfaceProps: mergeProps(others, surfaceProps),
    };
};
