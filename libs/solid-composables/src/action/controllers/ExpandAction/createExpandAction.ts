import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createToggleAction } from '../ToggleAction';

import { $EXPAND_ACTION } from './constants';
import type { ExpandActionAPI, ExpandActionProps } from './types';

export const createExpandAction = (props: ExpandActionProps): ExpandActionAPI => {
    const [locals, expose, compose] = createExposable($EXPAND_ACTION, props);

    const toggleActionProps = computedProps({
        value: () => locals.expanded,
        labels: () => ({
            on: locals.labels.expanded,
            off: locals.labels.collapsed,
        }),
        icons: () => ({
            on: locals.icons.expanded,
            off: locals.icons.collapsed,
        }),
    });
    const { _icon: _toggleActionIcon } = compose(createToggleAction(toggleActionProps));

    const _icon = computedProps({
        'aria-expanded': () => locals.expanded,
        'aria-controls': () => locals.controls,
    });

    return exposeAPI(expose, '_icon', {
        _icon: combineProps(_toggleActionIcon, _icon),
    });
};
