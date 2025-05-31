import { createExposable, exposeAPI, i, l } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import { $TOGGLE_ACTION } from './constants';
import type { ToggleActionAPI, ToggleActionProps } from './types';

export const createToggleAction = (props: ToggleActionProps): ToggleActionAPI => {
    const [locals, expose] = createExposable($TOGGLE_ACTION, props);

    const _icon = computedProps({
        label: () => l(locals.value ? locals.labels.on : locals.labels.off),
        icon: () => i(locals.value ? locals.icons.on : locals.icons.off),
    });

    return exposeAPI(expose, '_icon', {
        _icon,
    });
};
