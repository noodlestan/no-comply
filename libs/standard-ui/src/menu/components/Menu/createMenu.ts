import { createMenu as createHeadlessMenu } from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createSurface } from '../../../surface';
import { createMenuMixin } from '../../mixins';

import type { MenuAPI, MenuProps } from './types';

export const createMenu = (props: MenuProps): MenuAPI => {
    const { $root, $label, contextValue } = createHeadlessMenu(props);

    const surfaceProps = {
        tag: 'div',
        variant: 'menu',
        padding: 'xs',
    } as const;
    const { surfaceProps: $surfaceRoot } = createSurface(surfaceProps);

    const { $root: $menuMixinRoot } = createMenuMixin();

    return {
        surfaceProps: combineProps($root, $menuMixinRoot, $surfaceRoot),
        $label,
        contextValue,
    };
};
