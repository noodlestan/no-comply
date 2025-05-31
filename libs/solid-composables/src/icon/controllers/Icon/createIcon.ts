import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $ICON } from './constants';
import type { IconAPI, IconProps } from './types';

export const createIcon = (props: IconProps): IconAPI => {
    const [locals, expose] = createExposable($ICON, props);

    const $static = {
        component: 'span' as const,
    };
    const $root = computedProps($static, {
        children: () => locals.icon({}),
    });

    return exposeAPI(expose, '$root', {
        $root,
    });
};
