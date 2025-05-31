import { createAriaSwitch } from '@no-comply/solid-accessibility';
import {
    type ToggleActionIcons,
    type ToggleActionLabels,
    createToggleAction,
} from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import { computedProps, mergeProps, pickProps } from '@no-comply/solid-primitives';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

import type { ActionVariant } from '../../types';

import type { ToggleButtonAPI, ToggleButtonProps } from './types';

const LABELS: ToggleActionLabels = {
    on: 'Collapse',
    off: 'Expand',
};

const ICONS: ToggleActionIcons = {
    on: createIconValue(ChevronDownIcon),
    off: createIconValue(ChevronUpIcon),
};

export const createToggleButton = (props: ToggleButtonProps): ToggleButtonAPI => {
    const toggleButtonProps = computedProps({
        value: () => props.value,
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });
    const { iconActionProps: toggleActionIconActionProps } = createToggleAction(toggleButtonProps);

    const ariaSwitchStaticProps = { tag: 'button' as const };
    const ariaSwitchProps = computedProps(ariaSwitchStaticProps, {
        label: () => toggleActionIconActionProps.label,
        checked: () => props.value,
        disabled: () => Boolean(props.disabled),
    });
    const { $root: $switchRoot } = createAriaSwitch(ariaSwitchProps);

    const staticIconButtonProps = { variant: 'plain' as ActionVariant };
    const iconButtonProps = pickProps(props, ['size', 'onPress', 'disabled']);

    return {
        iconButtonProps: mergeProps(
            $switchRoot,
            iconButtonProps,
            staticIconButtonProps,
            toggleActionIconActionProps,
        ),
    };
};
