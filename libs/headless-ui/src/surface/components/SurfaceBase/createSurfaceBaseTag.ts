import { createAriaRegion } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps, staticClassList } from '@noodlestan/context-ui-types';
import { splitProps } from 'solid-js';

import styles from './SurfaceBase.module.css';
import type { SurfaceAPI, SurfaceBaseTagProps } from './types';

export const createSurfaceBaseTag = (props: SurfaceBaseTagProps): SurfaceAPI => {
    const [locals, childProps] = splitProps(props, ['context', 'style']);

    const component = () => props.component ?? 'div';

    const style = () => ({
        ...locals.style,
        ...locals.context.contextVars(),
    });

    const staticProps = {
        classList: staticClassList(styles, 'SurfaceBase'),
    };

    const elProps = createComputedProps(staticProps, {
        component,
        style,
    });

    const { elProps: regionProps, labelProps } = createAriaRegion(props);

    return {
        elProps: mergeProps(childProps, regionProps, elProps),
        elData: locals.context.contextData,
        labelProps,
    };
};
