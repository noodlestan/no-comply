import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createSurfaceBaseTag } from './createSurfaceBaseTag';
import type { SurfaceBaseTagProps } from './types';

export const SurfaceBaseTag: Component<SurfaceBaseTagProps> = props => {
    const { elProps, elData } = createSurfaceBaseTag(props);
    return <Dynamic {...elProps} {...elData()} />;
};
