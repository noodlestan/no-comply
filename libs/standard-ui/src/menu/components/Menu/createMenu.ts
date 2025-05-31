import { createMenu as createHeadlessMenu } from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createSurface } from '../../../surface';
import { createMenuMixin } from '../../mixins';

import { $MENU } from './constants';
import type { MenuAPI, MenuProps } from './types';

export const createMenu = (props: MenuProps): MenuAPI => {
    const [locals, expose, compose] = createExposable($MENU, props);

    const surfaceProps = {
        tag: 'div',
        variant: 'menu',
        padding: 'xs',
    } as const;
    const { _surface } = compose(createSurface(surfaceProps));

    const { $root: $menuRoot, $label, contextValue } = compose(createHeadlessMenu(locals));
    const { $root: $menuMixinRoot } = compose(createMenuMixin());

    return exposeAPI(expose, '_surface', {
        _surface: combineProps(_surface, $menuRoot, $menuMixinRoot),
        $label,
        contextValue,
    });
};
