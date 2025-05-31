import { createAriaRegion } from '@no-comply/solid-accessibility';
import { createSurfaceContext } from '@no-comply/solid-contexts';
import { combineProps, computedProps, createDataAttributes } from '@no-comply/solid-primitives';

import type { SurfaceAPI, SurfaceProps } from './types';

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const contextValue = createSurfaceContext(() => props.variant);
    const [context] = contextValue;

    const { $root: $regionRoot, $label, $description } = createAriaRegion(props);

    const style = () => context.contextVars();
    const component = () => props.tag ?? 'div';
    const $root = computedProps({
        style,
        component,
    });

    const dataAttributes = createDataAttributes(context.contextData);

    return {
        $root: combineProps(dataAttributes, $regionRoot, $root),
        $description,
        $label,
        context,
        contextValue,
    };
};
