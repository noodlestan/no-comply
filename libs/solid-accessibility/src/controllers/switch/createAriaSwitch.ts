import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import type { SwitchTagName } from '../../tag';
import { createAriaRegion } from '../region';

import type { AriaSwitchAPI, AriaSwitchProps } from './types';

export const createAriaSwitch = (props: AriaSwitchProps): AriaSwitchAPI => {
    const { $root: $regionRoot, $label, $description } = createAriaRegion(props, 'switch');

    const type = (tag: SwitchTagName = 'button'): 'button' | 'checkbox' | undefined => {
        if (tag === 'input') {
            return 'checkbox';
        }
        return tag === 'button' ? 'button' : undefined;
    };

    const $root = computedProps({
        component: () => props.tag,
        type: () => type(props.tag),
        'aria-checked': () => props.checked,
        'aria-disabled': () => props.disabled,
        'data-disabled': () => (props.disabled ? '' : undefined),
    });

    return {
        $root: mergeProps($regionRoot, $root),
        $label,
        $description,
    };
};
