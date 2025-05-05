import { createSurfaceContext } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

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
        onPointerDown: () => props.onPointerDown,
    });

    return {
        $root: mergeProps(context.contextData, $ariaRegion, $localRoot),
        $description,
        $label,
        context,
        contextValue,
    };
};
