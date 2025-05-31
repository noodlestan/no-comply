import {
    type ExpandActionIcons,
    type ExpandActionLabels,
    createExpandAction,
} from '@no-comply/solid-composables';
import { createExposable, createIconValue, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

import type { ActionVariant } from '../../types';

import { $EXPAND_BUTTON } from './constants';
import type { ExpandButtonAPI, ExpandButtonProps } from './types';

const LABELS: ExpandActionLabels = {
    expanded: 'Collapse',
    collapsed: 'Expand',
};

const ICONS: ExpandActionIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronUpIcon),
};

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
    const [locals, expose, compose] = createExposable($EXPAND_BUTTON, props);

    const expandButtonProps = computedProps({
        controls: () => locals.controls,
        expanded: () => locals.expanded,
        labels: () => Object.assign({}, LABELS, locals.labels),
        icons: () => Object.assign({}, ICONS, locals.icons),
    });
    const { _icon: expandActionIcon } = compose(createExpandAction(expandButtonProps));

    const _iconButton = {
        variant: 'plain' as ActionVariant,
    };

    return exposeAPI(expose, '_iconButton', {
        _iconButton: combineProps(expandActionIcon, locals, _iconButton),
    });
};
