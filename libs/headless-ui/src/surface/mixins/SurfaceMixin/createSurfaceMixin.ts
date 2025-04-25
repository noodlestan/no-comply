import { createComputedProps, staticClassList } from '@noodlestan/context-ui-primitives';

import styles from './SurfaceMixin.module.css';
import type { SurfaceMixinAPI } from './types';

export const createSurfaceMixin = (): SurfaceMixinAPI => {
    const surfaceStaticProps = {
        classList: staticClassList(styles, 'Surface'),
    };
    const elProps = createComputedProps(surfaceStaticProps, {});

    return {
        elProps,
    };
};
