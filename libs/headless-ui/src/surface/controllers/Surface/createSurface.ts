import { createSurfaceContext } from '@noodlestan/context-ui';
import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import type { SurfaceAPI, SurfaceProps } from './types';

export const createSurface = (props: SurfaceProps): SurfaceAPI => {
    const contextValue = createSurfaceContext(() => props.variant);
    const [context] = contextValue;

    const { elProps: regionProps, labelProps, descriptionProps } = createAriaRegion(props);

    const style = () => context.contextVars();

    const component = () => props.component ?? 'div';

    const elProps = createComputedProps({
        style,
        component,
    });

    return {
        elProps: mergeProps(regionProps, elProps, context.contextData),
        descriptionProps,
        labelProps,
        context,
        contextValue,
    };
};
