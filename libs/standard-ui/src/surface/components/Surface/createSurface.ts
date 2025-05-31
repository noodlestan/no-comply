import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import {
    type PickRequired,
    combineProps,
    computedProps,
    staticClassList,
} from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createLayoutMixin } from '../../../layout';

import styles from './Surface.module.scss';
import { $SURFACE } from './constants';
import type { SurfaceAPI, SurfaceProps } from './types';

const defaultProps: PickRequired<SurfaceProps, 'variant'> = {
    variant: 'stage',
};

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const [locals, expose, compose] = createExposable($SURFACE, props);

    const [ownProps, others] = splitProps(locals, ['variant']);

    const { $root: $layoutMixinRoot } = compose(createLayoutMixin(locals));

    const variant = () => ownProps.variant ?? defaultProps.variant;

    const staticProps = {
        classList: staticClassList(styles, 'Surface'),
    };
    const _surface = computedProps(staticProps, { variant });

    return exposeAPI(expose, '_surface', {
        _surface: combineProps(others, $layoutMixinRoot, _surface),
    });
};
