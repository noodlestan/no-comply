import { SurfaceBase } from '@noodlestan/headless-ui';
import { type Component } from 'solid-js';

import { createSurface } from './createSurface';
import type { SurfaceProps } from './types';

export const Surface: Component<SurfaceProps> = props => {
    const { surfaceProps } = createSurface(props);
    return <SurfaceBase {...surfaceProps} />;
};
