import { createAriaRegion } from '@no-comply/solid-accessibility';
import { createSurfaceContext } from '@no-comply/solid-contexts';
import { createComputedProps, createDataAttributes, mergeProps } from '@no-comply/solid-primitives';

import type { SurfaceAPI, SurfaceProps } from './types';

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const contextValue = createSurfaceContext(() => props.variant);
    const [context] = contextValue;

    const { $root: $ariaRegion, $label, $description } = createAriaRegion(props);

    const style = () => context.contextVars();
    const component = () => props.tag ?? 'div';
    const $localRoot = createComputedProps({
        style,
        component,
    });

    const dataAttributes = createDataAttributes(context.contextData);

    return {
        $root: mergeProps(dataAttributes, $ariaRegion, $localRoot),
        $description,
        $label,
        context,
        contextValue,
    };
};
