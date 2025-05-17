import { createIconValue } from '@noodlestan/context-ui';
import { createAriaSwitch } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps, pickProps } from '@noodlestan/context-ui-primitives';
import {
    type ToggleActionIcons,
    type ToggleActionLabels,
    createToggleAction,
} from '@noodlestan/headless-ui';
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
    const toggleButtonProps = createComputedProps({
        value: () => props.value,
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });
    const { iconActionProps: toggleActionIconActionProps } = createToggleAction(toggleButtonProps);

    const ariaSwitchStaticProps = { tag: 'button' as const };
    const ariaSwitchProps = createComputedProps(ariaSwitchStaticProps, {
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
